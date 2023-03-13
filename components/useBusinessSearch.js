// export default function useBusinessSearch(catageory, location){
//     const [businesses, setBusinesses] = React.useState([])
//     const [amountResults, setAmountResults] = React.useState([])
//     const [searchParams, setSearchParams] = React.useState({catageory, location})
    
//      React.useEffect(() => {
//           setBusinesses([]);
//         fetch("/api/yelpapi" , searchParams)
//           .then((res) => {
//              if(!res.ok) throw Error(res.statusText)
//              return res.json()
//            })
//           .then((data) => {
//             console.log(data)
//             setBusinesses(data.businesses)
//             setAmountResults(res.total);
//           })
//           .catch((error) => console.log("error", error))
  
//      },[searchParams]);
//     return[businesses, amountResults, searchParams, setSearchParams];
//  }
 