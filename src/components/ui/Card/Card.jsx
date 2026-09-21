import styles from "./Card.module.scss";

export default function Card({
  children,
  className = "",
  interactive = false,
  tight = false,
  padding = "md",
  as: Tag = "div",
  ...props
}) {
  const paddingClass =
    padding === "none"
      ? ""
      : padding === "xl"
        ? styles.paddingXl
        : padding === "lg"
          ? styles.paddingLg
          : styles.paddingMd;

  const classes = [
    styles.card,
    interactive ? styles.interactive : "",
    tight ? styles.tight : "",
    paddingClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
