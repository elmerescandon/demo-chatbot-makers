import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Send} from "lucide-react";
import Loading from "./Loading/Loading";

type InputProps = {
    handleNewMessage: (message: string) => void;
};

const Input = ({handleNewMessage}: InputProps) => {
    const schema = z.object({
        message: z.string({
            required_error: "message is required",
        }),
    });

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}, // Add isSubmitting to track loading state
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: any) => {
        try {
            handleNewMessage(data.message);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex justify-between p-3 border border-neutral-300 rounded-lg"
        >
            <input
                type="text"
                id="message"
                placeholder="Write your message..."
                {...register("message")}
                className="active:bg-white focus:outline-blue"
            />
            {errors?.message?.message && (
                <span>{errors.message.message as string}</span>
            )}
            {isSubmitting ? (
                <Loading />
            ) : (
                <button type="submit">
                    <Send size={24} />
                </button>
            )}
        </form>
    );
};

export default Input;
