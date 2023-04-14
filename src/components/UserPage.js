import React , {useEffect, useState} from 'react'

const UserPage = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('users'));
        if (items) {
         setItems(items);
        }
      }, []);


    // let userData = localStorage.getItem('users');        
    console.log(items, "ujxhbzj")
     
   
    return (
        <>
            <div className='container'>
                <div>
                    <h1 className='py-3 text-danger text-center'>User Details Page</h1>

                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                className="img-fluid" alt="User Image" />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <div class="card">
                                <div class="card-body">
                                    <h2 class="card-title">Name : {items.name}</h2>
                                    <h4 class="card-subtitle mb-2 text-muted">User Email : {items.email}</h4>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default UserPage