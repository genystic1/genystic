// utils/whatsapp.ts
export const generateWhatsAppLink = (cartItems: any[], cartTotal: number, selectedImage: string) => {
    const phoneNumber = '6289616968334'; // Ganti dengan nomor WA yang benar
    
    let message = `Hello! I would like to order:\n\n`;
  
    cartItems.forEach((item) => {
      message += `• ${item.name}\n`;
      message += `   Size: ${item.size}\n`;
      message += `   Quantity: ${item.quantity}\n\n`;
    });
  
    message += `Total Price: $${cartTotal}\n\n`;
    message += `Product Image: https://genystic.vercel.app/${selectedImage}`; // Ganti sesuai URL gambar produk yang valid
  
    const encodedMessage = encodeURIComponent(message);
  
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };
