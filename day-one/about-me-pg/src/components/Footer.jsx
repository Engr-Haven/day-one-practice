function Footer() {
  return (
    <footer>
      <div className="lhs-cont">
        <p>&copy; {new Date().getFullYear()} Haven</p>
      </div>
      <div className="rhs-cont">
        <p>
          <a href="https://x.com">Twitter</a>
        </p>
        <p>
          <a href="https://linkedin.com">LinkedIn</a>
        </p>
        <p>
          <a href="https://github.com">GitHub</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
