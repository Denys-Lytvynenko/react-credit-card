import { useFormikContext } from "formik";
import { FC, useEffect } from "react";

import { CardAutoSubmitProps } from "./types";

const CardAutoSubmit: FC<CardAutoSubmitProps> = ({
    disableAutoSubmit,
    children,
}) => {
    const { dirty, submitForm, isValid } = useFormikContext();

    useEffect(() => {
        if (!disableAutoSubmit && dirty && isValid) {
            submitForm();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dirty, isValid]);

    return <>{children}</>;
};

export default CardAutoSubmit;
