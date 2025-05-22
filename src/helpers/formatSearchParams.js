function getFormatedParams(searchParams) {
     let query = '';
    const {min, max} = searchParams;
    if(min) query = `${query == "" ? "" : query + "&"}min=${min}`;
    if(max) query = `${query == "" ? "" : query + "&"}max=${max}`;
    return query;
}

export default getFormatedParams;