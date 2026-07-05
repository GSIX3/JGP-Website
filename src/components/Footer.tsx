import "../styles/footer.css";
import { site } from "../content/site";

export default function Footer() {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} {site.legalName}. All rights
        reserved.
      </p>
      <p className="footer-credit">
        Powered by{" "}
        <a
          href="https://www.gsix3.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GSIX3
        </a>
      </p>
    </footer>
  );
}
