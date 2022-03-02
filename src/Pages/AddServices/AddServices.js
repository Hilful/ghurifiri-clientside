import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './AddService.css';
const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    // onsubmit function
    const onSubmit = data => {
        console.log(data);
        axios.post('https://protected-escarpment-85835.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    swal("Good job!", "added successfully", "success");
                    reset();
                }
            });
    }
    return (
        <div className="pt-5 form-design">
            <h3 className="text-info pt-5">Add you service</h3>
            {/* add service form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input style={{color:"white", backgroundColor: "rgba(0, 0, 0, 0.01)" }} placeholder="Img-url"  {...register("img")} /> <br />
                {/* country */}
                <input style={{color:"white", backgroundColor: "rgba(0, 0, 0, 0.01)" }} placeholder="Country" type="text" {...register("country")} /> <br />
                {/* description */}
                <input style={{color:"white", backgroundColor: "rgba(0, 0, 0, 0.01)" }} placeholder="description" type="text" {...register("description")} /> <br />
                {/* total days */}
                <input style={{color:"white", backgroundColor: "rgba(0, 0, 0, 0.01)" }} placeholder="Total days" type="text" {...register("total days")} /> <br />
                {/* maximum people */}
                <input style={{ color:"white",backgroundColor: "rgba(0, 0, 0, 0.01)" }} placeholder="Maximum people" type="number" {...register("maxPeople")} /> <br />
                {/* total cost */}
                <input style={{color:"white", backgroundColor: "rgba(0, 0, 0, 0.01)" }} placeholder="cost" type="number" {...register("cost")} /> <br />
                <input type="submit" className="rounded-pill bg-info" value="Add service" />
            </form>

        </div>
    );
};

export default AddServices;