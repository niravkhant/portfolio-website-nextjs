export function MailIcon({ className, ...props }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4 6.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="m3.5 7.5 8.5 6 8.5-6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinkedInIcon({ className, ...props }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M6.5 8.5a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM5 10.25h3v9.75H5v-9.75ZM12.25 10.25h2.88v1.33h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.39h-3v-4.78c0-1.14-.02-2.6-1.58-2.6-1.58 0-1.82 1.24-1.82 2.51v4.87h-3v-9.75Z" />
    </svg>
  );
}

export function GitHubIcon({ className, ...props }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2.5c-5.25 0-9.5 4.08-9.5 9.12 0 4.03 2.91 7.45 6.84 8.17.5.09.68-.21.68-.47 0-.23-.01-.84-.01-1.65-2.82.56-3.42-1.29-3.42-1.29-.46-1.12-1.12-1.42-1.12-1.42-.92-.6.07-.59.07-.59 1.02.07 1.56 1.01 1.56 1.01.9 1.49 2.36 1.06 2.94.81.09-.64.35-1.06.64-1.31-2.25-.24-4.62-1.06-4.62-4.72 0-1.04.39-1.9 1.03-2.57-.1-.24-.45-1.22.1-2.54 0 0 .84-.26 2.75 1a9.2 9.2 0 0 1 2.5-.32c.85 0 1.7.11 2.5.32 1.9-1.26 2.74-1 2.74-1 .55 1.32.2 2.3.1 2.54.64.67 1.03 1.53 1.03 2.57 0 3.67-2.38 4.48-4.65 4.71.37.3.69.9.69 1.82 0 1.31-.01 2.37-.01 2.69 0 .26.18.57.69.47A9.55 9.55 0 0 0 21.5 11.62C21.5 6.58 17.25 2.5 12 2.5Z" />
    </svg>
  );
}

export function MapPinIcon({ className, ...props }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 21s6-5.33 6-10a6 6 0 1 0-12 0c0 4.67 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2.25" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function ExternalLinkIcon({ className, ...props }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M14 5h5v5M10 14 19 5M19 10v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
