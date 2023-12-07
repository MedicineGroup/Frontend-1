import {
  Card,
  Input,
  Button,
  Typography,
  Spinner,
  Alert,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../store/auth-context";
import { ROUTES } from "../../utils/routes";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import classes from "./Form-style.module.css";

const schema = yup.object({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email("Fournissez un email correcte"),
  password: yup.string().required(),
});

const SignupForm = () => {
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const { onSignup, errors: signupErrors } = useAuthContext();
  const { isSubmitting, errors } = formState;
  const onSubmit = async (data) => {
    await onSignup(data);
    reset();
  };
  return (
    <Card
      color="transparent"
      shadow={false}
      className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <Typography variant="h4" color="blue-gray">
        S&#39;enregistrer
      </Typography>
      {signupErrors && <Alert color="red">{signupErrors.signupErrors}</Alert>}
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Votre prenom
          </Typography>
          <Input
            size="lg"
            placeholder="John"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("firstname")}
            error={errors.firstname && true}
          />
          {errors?.firstname && (
            <div className={classes["input-error"]}>
              {errors.firstname.message}
            </div>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Votre Nom
          </Typography>
          <Input
            size="lg"
            placeholder="John"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("lastname")}
            error={errors.lastname && true}
          />
          {errors?.lastname && (
            <div className={classes["input-error"]}>
              {errors.lastname.message}
            </div>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Votre Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("email")}
            error={errors.email && true}
          />
          {errors?.email && (
            <div className={classes["input-error"]}>{errors.email.message}</div>
          )}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Mot de Passe
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("password")}
            error={errors.password && true}
          />
          {errors?.password && (
            <div className={classes["input-error"]}>
              {errors.password.message}
            </div>
          )}
        </div>
        <Button
          type="submit"
          className="mt-6"
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? <Spinner /> : "Creer un compte"}
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Deja un utilisateur?{" "}
          <Link to={ROUTES.LOGIN} className="font-medium text-gray-900">
            Se connecter
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default SignupForm;
