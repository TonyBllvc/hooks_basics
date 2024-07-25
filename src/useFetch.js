import { useState, useEffect } from 'react';


const useFetch = ( url) => {
    const [data, setData] = useState(null);

    const [pending, setPending] = useState(true);

    const[error, setError] = useState(null);


    useEffect(() => {
        // to stop background fetch/ dom from running continuously
        const abortCont = new AbortController();

        // The timeout function is used to simulate setPending function in real-time
        setTimeout(() => {
            // Fetch json api
            fetch(url, { signal: abortCont.signal })
            // we do not use async
            // we execute a function once the fetch promise has been executed
            // then parse a response object (res), to get data
                .then(res =>  {
                    // To check if response fetch is ok
                    // console.log(res);
                    if(!res.ok){
                        throw Error('Could not fetch data for the resource');
                    }
                    // to get the data, parse json into a javascript object
                    // note: 'res.json()' is async
                    return res.json();
                })
                // put another then function to execute a function once
                // this is to get the data
                .then(data => {
                    // parse in data to update blog state
                    setData(data);
                    //   A function to tell a user that the application is loading
                    setPending(false);
                    setError(null);
                })
                // Error message tom display when user tries to connect
                .catch(err => {
                    // to catch the error
                    if (err.name === 'AbortError'){
                        console.log('fetch aborted');
                    } else {
                        // console.log(err.message)
                        setPending(false);
                        setError(err.message);   
                    } 
                })
            }, 1500)

            return () => abortCont.abort();
    }, [url]); 

    return { data, pending, error }
}

export default useFetch;