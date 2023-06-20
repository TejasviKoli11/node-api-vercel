import Link from 'next/link';

function IndexPage() {
    return (
        <div>
          <h1>Welcome to Smart Vents</h1>
          <p>This is the main page of our application.</p>
          <Link href="/login">
            Login
          </Link>
          <Link href="/signup">
            SignUp
          </Link>
          <Link href="/contact">
            Conatct Us
          </Link>
          <Link href="/about">
            About Us
          </Link>
        </div>
      );
    }
  
  export default IndexPage;