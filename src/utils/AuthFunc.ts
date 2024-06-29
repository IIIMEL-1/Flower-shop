import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useGetDataAccountMutation } from "@redux/slices/createApi";
import { getData } from "@redux/slices/authSlice";
import { useTypedSelector } from "@hooks/useTypedSelector";

export default function AuthFunc() {
  const dispatch = useDispatch();
  const userDetails = useTypedSelector((state) => state.authSlice.userDetails);
  const token = localStorage.getItem("token");
  const [getDataUser, { data }] = useGetDataAccountMutation();

  useEffect(() => {
    if (token && !userDetails) {
      getDataUser(token);
    }

    if (data && !userDetails) {
      dispatch(getData({ data }));
    }
  }, [token, data]);

  useEffect(() => {
    if (userDetails && userDetails.orders) {
      const { orders } = userDetails;
      const totalPrice: number[] = orders.map((order) => order.totalPrice);
      const convertedPrice = Math.min(
        totalPrice.reduce((sum, price) => sum + price, 0) / 1000,
        100
      );

      console.log(totalPrice);

      let discountPercent = 0;

      if (convertedPrice < 25) discountPercent = 0;
      else if (convertedPrice < 65) discountPercent = 3;
      else if (convertedPrice < 100) discountPercent = 5;
      else if (convertedPrice === 100) discountPercent = 7;

      if (userDetails.percent !== discountPercent) {
        dispatch(
          getData({ data: { ...userDetails, percent: discountPercent } })
        );
      }
    }
  }, [userDetails]);
}
