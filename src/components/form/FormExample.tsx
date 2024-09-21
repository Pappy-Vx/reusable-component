import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { FormComponent, FormField, FormButton } from "./FormComponent";

const schema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type FormFields = z.infer<typeof schema>;
const FormExample = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };
  return (
    <div>
      FormExample
      <FormComponent onSubmit={handleSubmit(onSubmit)} className="tutorial">
        <FormField
          name="email"
          label="Email"
          type="text"
          register={register}
          error={errors.email?.message}
        />
        <FormField
          name="password"
          label="Password"
          type="password"
          register={register}
          error={errors.password?.message}
        />
        <FormButton disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Submit"}
        </FormButton>
        {errors.root && (
          <div className="text-red-500">{errors.root.message}</div>
        )}
      </FormComponent>
    </div>
  );
};

export default FormExample;
