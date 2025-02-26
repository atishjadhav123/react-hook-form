// "use client"
// import { useForm, SubmitHandler } from "react-hook-form"
// // import {z} from 'zod'
// // import { data } from "react-router-dom"

// interface Inputs {
//     name: string
//     email: string
//     mobile: string
//     age: string
//     gender: string
//     date: string
//     married: boolean
// }

// const Form = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
//     const onSubmit: SubmitHandler<Inputs> = (data) => {
//         console.log("Form Data: ", data)
//     }

//     return (
//         <main className="flex h-screen items-center justify-center">
//             <form
//                 onSubmit={handleSubmit(onSubmit)}
//                 className="bg-green-200 px-10 py-4 shadow-md w-1/4 flex flex-col"
//             >
//                 <h1 className="text-3xl font-bold text-green-400">Submit Form</h1>

//                 <div className="mt-6">
//                     <div className="pb-4">
//                         <input
//                             type="text"
//                             {...register("name", { minLength: { value: 5, message: "Minimum 5 characters" }, required: "Name is required", maxLength: 20 })}
//                             placeholder="Name"
//                             className="mt-1 w-full rounded text-sm p-2"
//                         />
//                         {errors.name && (<p className="text-red-500 text-sm">{errors.name.message}</p>)}
//                     </div>

//                     <div className="pb-4">
//                         <input
//                             type="email"
//                             {...register("email", { required: "Email is required" })}
//                             placeholder="Email"
//                             className="mt-1 w-full rounded text-sm p-2"
//                         />
//                         {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//                     </div>

//                     <div className="pb-4">
//                         <input
//                             type="number"
//                             {...register("mobile", { minLength: { value: 10, message: "Minimum 10 digits" }, required: "Mobile number is required", maxLength: 10 })}
//                             placeholder="Enter Mobile"
//                             className="mt-1 w-full rounded text-sm p-2"
//                         />
//                         {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
//                     </div>

//                     <div className="pb-4">
//                         <input
//                             type="date"
//                             {...register("date", { required: "Date is required" })}
//                             placeholder="Enter Date"
//                             className="mt-1 w-full rounded text-sm p-2"
//                         />
//                         {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
//                     </div>

//                     <div className="pb-4">
//                         <input
//                             type="number"
//                             {...register("age", { required: "Age is required" })}
//                             placeholder="Enter Age"
//                             className="mt-1 w-full rounded text-sm p-2"
//                         />
//                         {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
//                     </div>

//                     <div className="flex items-center gap-2">
//                         <input
//                             type="checkbox"
//                             {...register("married", { required: "Marital status is required" })}
//                             className="h-4 w-4 text-green-400 border-gray-300 rounded"
//                         />
//                         <label className="text-sm font-medium text-gray-700">Married</label>
//                     </div>
//                     {errors.married && <p className="text-red-500 text-sm">{errors.married.message}</p>}

//                     <div className="mt-4">
//                         <label className="block text-sm font-medium text-gray-700">
//                             Gender
//                         </label>
//                         <div className="flex gap-4 mt-2">
//                             <label className="flex items-center gap-1">
//                                 <input
//                                     type="radio"
//                                     value="Male"
//                                     {...register("gender", { required: "Gender is required" })}
//                                     className="h-4 w-4 text-green-400 border-gray-300"
//                                 />
//                                 Male
//                             </label>
//                             <label className="flex items-center gap-1">
//                                 <input
//                                     type="radio"
//                                     value="Female"
//                                     {...register("gender")}
//                                     className="h-4 w-4 text-green-400 border-gray-300"
//                                 />
//                                 Female
//                             </label>
//                         </div>
//                         {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
//                     </div>

//                     <button
//                         type="submit"
//                         className="mt-4 w-full bg-green-400 text-white p-2 rounded"
//                     >
//                         Submit
//                     </button>
//                 </div>
//             </form>
//         </main>
//     )
// }

// export default Form
