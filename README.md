<h1>Everstyle E-commerce Website</h1>
  <p>Everstyle is a modern, React-based e-commerce platform designed to provide users with an intuitive shopping experience. The application features seamless navigation, dynamic components, and Firebase integration for user authentication and backend support. This project is under active development, with more functionalities planned for future updates.</p>
  <hr>
  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#project-overview">Project Overview</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#technologies">Technologies</a></li>
    <li><a href="#folder-structure">Folder Structure</a></li>
    <li><a href="#contributing">Contributing</a></li>
      </ul>
  <hr>
  <h2 id="project-overview">Project Overview</h2>
  <p>Everstyle is an e-commerce website where users can:</p>
  <ul>
    <li>Browse products with a responsive, easy-to-navigate interface.</li>
    <li>View detailed product descriptions and specifications.</li>
    <li>Add items to the shopping cart for future purchases.</li>
    <li>Manage their account and access features like shipping details, return policies, and contact information.</li>
  </ul>
  <p>Future updates will include a complete checkout process, payment gateway integration, and personalized recommendations.</p>
  <hr>
  <h2 id="features">Features</h2>
  <h3>Implemented Features:</h3>
  <ul>
    <li><strong>Home Page:</strong> Displays featured products and special offers.</li>
    <li><strong>Product Listing:</strong> Browse available products in a responsive grid layout.</li>
    <li><strong>Product Details:</strong> View images, descriptions, and specifications of individual products.</li>
    <li><strong>User Authentication:</strong> Secure login and registration powered by Firebase.</li>
    <li><strong>Shopping Cart:</strong> Add items to the cart and manage them easily.</li>
  </ul>
  <h3>Upcoming Features:</h3>
  <ul>
    <li>Checkout process with payment gateway integration.</li>
    <li>User order history and personalized recommendations.</li>
    <li>Advanced analytics and admin panel for product management.</li>
  </ul>
  <hr>
  <h2 id="installation">Installation</h2>
  <p>Follow these steps to set up and run the project locally:</p>
  <h3>Prerequisites</h3>
  <p>Ensure you have the following installed:</p>
  <ul>
    <li><a href="https://nodejs.org/">Node.js</a> and npm (Node Package Manager).</li>
  </ul>
  <h3>Steps</h3>
  <pre>
git clone https://github.com/JanviMaster/Everstyle.git
cd Everstyle
npm install
npm start
  </pre>
  <p>Open <a href="http://localhost:3000">http://localhost:3000</a> in your browser to view the site.</p>
  <hr>
  <h2 id="usage">Usage</h2>
  <p>Once the server is running:</p>
  <ul>
    <li>Use the navigation bar to switch between pages like <strong>Home</strong>, <strong>Explore</strong>, <strong>About Us</strong>, <strong>Cart</strong>, and more.</li>
    <li>Browse products, check details on the product details page, and manage items in your cart.</li>
    <li>Additional features like checkout and user order management will be implemented in future updates.</li>
  </ul>
  <hr>
  <h2 id="technologies">Technologies</h2>
  <h3>Frontend:</h3>
  <ul>
    <li><strong>React:</strong> For building the dynamic, component-based user interface.</li>
    <li><strong>React Router DOM:</strong> Enables seamless navigation across multiple pages.</li>
    <li><strong>Bootstrap:</strong> Provides a responsive and visually appealing design.</li>
    <li><strong>CSS:</strong> Custom styling for unique branding.</li>
  </ul>
  <h3>Backend:</h3>
  <ul>
    <li><strong>Firebase:</strong> Manages authentication, database, and hosting.</li>
  </ul>
  <hr>
  <h2 id="folder-structure">Folder Structure</h2>
  <div class="folder-structure">
    Everstyle/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── assets/             
    │   ├── components/         
    │   │   ├── Navbar.js
    │   │   ├── Footer.js
    │   │   ├── AddItem.js
    │   │   ├── Product.js
    │   │   ├── ProductList.js
    │   │   └── Total.js
    │   ├── pages/              
    │   │   ├── AboutUs.js
    │   │   ├── Cart.js
    │   │   ├── ContactInfo.js
    │   │   ├── ShippingDetails.js
    │   │   ├── Explore.js
    │   │   └── Dashboard.js
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
    ├── package.json
    └── README.md
  </div>
  <hr>
  <h2 id="contributing">Contributing</h2>
  <p>We welcome contributions to Everstyle! If you'd like to help, feel free to:</p>
  <ol>
    <li>Fork the repository.</li>
    <li>Create a feature branch (<code>git checkout -b feature-name</code>).</li>
    <li>Commit your changes (<code>git commit -m "Add feature"</code>).</li>
    <li>Push to the branch (<code>git push origin feature-name</code>).</li>
    <li>Open a pull request.</li>
  </ol>
