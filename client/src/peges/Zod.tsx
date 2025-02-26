import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRegisterFormMutation } from "../redux/formApi"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { RegisterUserRequest } from "../redux/formApi"


export const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Valid email is required" }),
    mobile: z.string().length(10, { message: "Mobile number must be exactly 10 digits" }),
    address: z.string().min(2, { message: "Address must be at least 2 characters" }),
    city: z.enum(["Jalna", "Sambhajinagar", "Pune", "Mumbai", "Delhi", "Ambad"], {
        message: "Please select a valid city",
    }),
    language: z.array(z.enum(["JavaScript", "HTML", "React", "Redux", "Node.js"])).min(1, {
        message: "Please select at least one language",
    }),
    gender: z.enum(["Male", "Female"], { message: "Gender is required" }),
    date: z.coerce.date({ message: "Invalid date format" }),
    terms: z.literal(true, { message: "You must accept the terms" }),
})

type Inputs = z.infer<typeof formSchema>

const FormData = () => {
    const languages = ["JavaScript", "HTML", "React", "Redux", "Node.js"]
    const [registerForm, { isSuccess, isLoading, error }] = useRegisterFormMutation()
    const [profile, setProfile] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({
        resolver: zodResolver(formSchema),
        defaultValues: { language: [] },
    })

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setProfile(e.target.files[0])
        }
    }

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const formattedData: RegisterUserRequest = {
                ...data,
                date: new Date(data.date).toISOString(),
                profile: profile || undefined,
            }

            await registerForm(formattedData).unwrap()
        } catch (error) {
            console.error("Error submitting form:", error)
        } finally {
            setLoading(false)
        }
    }



    useEffect(() => {
        if (isSuccess) {
            toast.success("Form added successfully!")
            reset()
        }
    }, [isSuccess])

    if (isLoading) return <p className="text-center text-gray-600">Loading...</p>
    if (error) return <p className="text-center text-red-500">Error loading profile</p>

    return <>
        <main className="flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-blue-300 shadow-lg rounded-2xl p-8 w-full max-w-5xl border border-gray-100 mt-5"
            >
                <h1 className="text-3xl font-bold text-blue-500 text-center">Submit Form</h1>

                <div className="flex items-center justify-center gap-12">
                    <div className="mt-6">
                        <input type="text" {...register("name")} placeholder="Enter your name" className="w-96 rounded-lg border p-3" />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="mt-6">
                        <input type="email" {...register("email")} placeholder="Enter your email" className="w-96 rounded-lg border p-3" />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                </div>

                <div className="flex items-center justify-center gap-12">
                    <div className="mt-6">
                        <input type="text" {...register("address")} placeholder="Enter your address" className="w-96 rounded-lg border p-3" />
                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                    </div>
                    <div className="mt-6">
                        <input type="text" {...register("mobile")} placeholder="Enter your mobile" className="w-96 rounded-lg border p-3" />
                        {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
                    </div>
                </div>

                <div className="flex items-center justify-center gap-12">
                    <div className="mt-6">
                        <input type="date" {...register("date")} className="w-96 rounded-lg border p-3" />
                        {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
                    </div>
                    <div className="mt-6">
                        <select {...register("city")} className="w-96 rounded-lg border p-3">
                            <option value="">Select your city</option>
                            {["Jalna", "Sambhajinagar", "Pune", "Mumbai", "Delhi", "Ambad"].map((city) => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                    </div>
                </div>

                <div className="mt-6">
                    <label className="block text-gray-700 font-medium">Gender</label>
                    <div className="flex gap-6 mt-2">
                        {["Male", "Female"].map((gender) => (
                            <label key={gender} className="flex items-center gap-2">
                                <input type="radio" value={gender} {...register("gender")} className="h-5 w-5" />
                                {gender}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <label className="block font-bold">Select Language</label>
                    {languages.map((lang) => (
                        <div key={lang} className="flex items-center space-x-2">
                            <input type="checkbox" {...register("language")} value={lang} className="h-5 w-5" />
                            <span>{lang}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-6">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" {...register("terms")} className="h-4 w-4" />
                        <span>I agree to the terms and conditions</span>
                    </label>
                </div>

                <div className="mt-6">
                    <label className="block text-gray-700 font-medium">Upload Profile Picture</label>
                    <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded-lg" />
                </div>

                <button type="submit" className="px-4 py-2 w-full bg-blue-500 text-white rounded hover:bg-blue-900">
                    {loading ? "Submiting..." : "Submit"}
                </button>            </form>
        </main>
    </>
}

export default FormData
