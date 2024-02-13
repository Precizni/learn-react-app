function ErrorMessage({ message }: { message: string }) {
  return (
    <div>
      {message}
      <span>🚫</span>
    </div>
  );
}

export default ErrorMessage;
