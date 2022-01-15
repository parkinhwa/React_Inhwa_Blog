import React from 'react'

function LadingPage() {
   useEffect(() => {
      axios.get("/api/hello").then((response) => {
       console.log(response);
      });
    }, []);
    return (
        <div>
            LadingPage
        </div>
    )
}

export default LadingPage
