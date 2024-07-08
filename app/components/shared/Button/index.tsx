"use client"

import classnames from "classnames";

// import Icon from "@/components/Icon";

import styles from "./button.module.scss";

type ButtonVariantsType =
  | "primary"
  | "disabled"
  | "alternate"
  | "google"
  | "plain";

export interface ButtonProps {
  id?: string;
  label: string;
  handleClick?: () => void;
  variant: ButtonVariantsType;
  type: "button" | "submit";
  size?: "small" | "medium" | "large";
  textColor?: "primary" | "secondary" | "dark" | "light";
  decoration?: "curve";
  disabled?: boolean;
  loading?: boolean;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant,
  type = "button",
  size,
  handleClick,
  textColor,
  disabled,
  decoration,
  loading = false,
  ariaLabel,
  id,
}) => {
  //Create classnames depending on available props
  const className = classnames({
    [styles.button]: true,
    [styles[`button-${variant}`]]: Boolean(variant),
    [styles[`button-${size}`]]: Boolean(size),
    [styles[`button-color-${textColor}`]]: Boolean(textColor),
    [styles[`button-${decoration}`]]: Boolean(decoration),
  });

  const loadingIndicator = loading && (
    <span className={styles["button-loader"]}>
      {/* <Icon icon="loader" /> */}
      Loading....
    </span>
  );

  return (
    <button
      id={id}
      aria-label={ariaLabel}
      type={type}
      onClick={handleClick}
      className={className}
      disabled={disabled}
      data-loading={loading}
    >
      {/* {variant === "google" && (
        <span className={styles["button-google_icon"]}>
          <Icon icon="google" width={30} height={30} />
        </span>
      )} */}
      <span>{label}</span>

      {loadingIndicator}
    </button>
  );
};

export default Button;
