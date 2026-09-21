import styles from "./Button.module.scss";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  type = "button",
  fullWidth = false,
  ...props
}) {
  const classes = [
    styles.button,
    styles[variant],
    size === "sm" ? styles.sm : "",
    size === "lg" ? styles.lg : "",
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
