async function getAllRequests(instance) {
  const totalRequests = await instance.methods.requestsCounter().call();
  const totalIncompleteReq = await instance.methods
    .totalIncompleteRequests()
    .call();

  const requestArray = await Promise.all(
    Array(parseInt(totalRequests))
      .fill()
      .map((element, index) => {
        return instance.methods.requests(index).call();
      })
  );

  return { requestArray, totalRequests, totalIncompleteReq };
}

export default getAllRequests;
