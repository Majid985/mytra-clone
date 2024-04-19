import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) {
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8081/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        // dispatch(fetchStatusActions.markFetchDone());
        dispatch(itemsAction.addInitialItems(items[0]));
      });
  });

  return <div></div>;
};

export default FetchItems;
