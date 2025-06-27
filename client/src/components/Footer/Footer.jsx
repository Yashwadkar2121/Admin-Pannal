import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} Pannal Technologies. All rights
          reserved.
        </p>
        <div className="footer-links">
          <a href="mailto:yashwadkar079@gmail.com">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
