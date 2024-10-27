 <h1>Everstyle E-commerce Website</h1>
    <p><strong>Everstyle</strong> is a modern, React-based e-commerce platform designed to provide users with an intuitive shopping experience. Currently under development, this project aims to incorporate a full suite of e-commerce functionalities in future updates.</p>
    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#project-overview">Project Overview</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#folder-structure">Folder Structure</a></li>
    </ul>
    <h2 id="project-overview">Project Overview</h2>
    <p><strong>Everstyle</strong> is an e-commerce website where users can browse products, view detailed descriptions, and ultimately purchase items. This platform is built with React for the front-end, with additional features, including a shopping cart and checkout process, planned for future development.</p>
    <h2 id="features">Features</h2>
    <ul>
        <li><strong>Home Page</strong>: Displays featured products and special offers.</li>
        <li><strong>Product Listing</strong>: Browse all available products with a responsive, easy-to-navigate grid layout.</li>
        <li><strong>Product Details</strong>: View detailed descriptions, images, and specifications of each product.</li>
        <li><strong>Shopping Cart</strong>: Add items to the cart for later purchase (currently in development).</li>
        <li><strong>My Cart</strong>: View and manage cart contents, with future updates planned for improved product insights.</li>
    </ul>
    <h2 id="installation">Installation</h2>
    <p>Follow these steps to set up and run the project locally.</p>
    <h3>Prerequisites</h3>
    <p>Ensure you have the following installed:</p>
    <ul>
        <li><a href="https://nodejs.org/en/download/">Node.js</a> and npm.</li>
    </ul>
    <h3>Steps</h3>
    <ol>
        <li><strong>Clone the repository:</strong>
            <pre><code>git clone https://github.com/JanviMaster/shop-it.git</code></pre>
        </li>
        <li><strong>Navigate to the project directory:</strong>
            <pre><code>cd shop-it</code></pre>
        </li>
        <li><strong>Install dependencies:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Start the development server:</strong>
            <pre><code>npm start</code></pre>
            <p>Open <a href="http://localhost:3000">http://localhost:3000</a> in your browser to view the site.</p>
        </li>
    </ol>
    <h2 id="usage">Usage</h2>
    <p>Once the server is running:</p>
    <ul>
        <li>Use the <strong>Navbar</strong> to navigate between different sections.</li>
        <li>Browse products, check details on the <strong>Product Details</strong> page, and manage items in the cart.</li>
        <li>Additional features, such as checkout, will be implemented in future updates.</li>
    </ul>
    <h2 id="technologies">Technologies</h2>
    <ul>
        <li><strong>React</strong>: For building the dynamic, component-based user interface.</li>
        <li><strong>React Router DOM</strong>: Enables seamless navigation across pages.</li>
        <li><strong>CSS</strong>: Provides styling and layout for a visually appealing design.</li>
    </ul>
    <h2 id="folder-structure">Folder Structure</h2>
    <pre><code>shop-it/
├── public/
│   └── index.html
├── src/
│   ├── assets/             
│   ├── components/         
│   │   ├── Navbar.js
│   │   └── Footer.js
|   |     |__AddItem.js
|   |     |__Product.js
|   |     |__ProductList.js
|   |    |__Total.js
│   ├── pages/              
│   │   └──AboutUs.js
|   |    |__Cart.js
|   |    |__ContactInfo.js
|   |    |__SippingDetails.js
|   |    |__Explore.js
|   |    |__Dashboard.js
│   ├── App.js               
│   ├── App.css             
│   └── index.js             
├── package.json
└── README.md

