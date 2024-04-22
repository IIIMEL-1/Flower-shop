import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useGetDataAccountMutation } from "../redux/slices/createApi";
import { getData } from "../redux/slices/authSlice";

export default function AuthFunc() {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.authSlice.userDetails);
  const token = localStorage.getItem("token");
  const [getDataUser, { data }] = useGetDataAccountMutation();

  console.log(data);

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
      const totalPrice = orders.reduce(
        (sum: number, order: { totalPrice: number }) => sum + order.totalPrice,
        0
      );
      const convertedPrice = Math.min(totalPrice / 1000, 100);

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
