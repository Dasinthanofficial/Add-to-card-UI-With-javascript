function product() {
      const name = document.getElementById("productname").value;
      const price = document.getElementById("productprice").value;  
      const quantity = document.getElementById("stockquantity").value; 
      const imagefile = document.getElementById("imagefile");
      const menu = document.getElementById("menu");

 
      const imageURL = URL.createObjectURL(imagefile.files[0]);

      const productCard = document.createElement("div");
     

      productCard.innerHTML = `
        <img src="${imageURL}" alt="${name}" class=" h-48 object-cover rounded mb-3">
        <div>
          <h4 class="font-bold text-lg">Product: ${name}</h4>
          <p class="text-gray-700">LKR: ${price}</p>
          <p class="text-gray-500">Stock: ${quantity}</p>
          <button class="bg-green-500 text-white px-3 py-1 mt-2 rounded">Add to Cart</button>
        </div>`;

      menu.appendChild(productCard);

      document.getElementById("productname").value = "";
      document.getElementById("productprice").value = "";
      document.getElementById("stockquantity").value = "";
      document.getElementById("imagefile").value ="";
    }