const MyFooter = () => {
  return (
    <footer className="container-fluid bg-dark border border-top-1 py-3">
      <div className="w-full text-center">
        <div className="w-full d-flex flex-row justify-content-around sm:flex sm:items-center sm:justify-between">
          <img
            className=" rounded-circle imgFooter"
            src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Books"
          />
          <div className="text-white">
            <p>About</p>
            <p>Privacy Policy</p>
            <p>Licensing</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
