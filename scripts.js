// ตัวอย่างราคาของแต่ละเมนู
const menuPrices = {
    "เบอร์เกอร์ไก่": 59,
    "ชาพีชสเลอปี้": 40,
    "นมฮอกไกโด": 40
};

let totalAmount = 0; // ตัวแปรเก็บยอดรวม

const orderList = document.getElementById('orderList');
const orderTotal = document.getElementById('orderTotal');

// การเพิ่มรายการในตะกร้า
function addToCart(menuName) {
    const quantity = document.getElementById('quantity-' + menuName).value;
    const price = menuPrices[menuName];
    const totalPrice = price * quantity;

    // สร้างรายการในตะกร้า
    const orderItem = document.createElement('div');
    orderItem.classList.add('order-item');
    orderItem.innerHTML = `
        <strong>${menuName}</strong> x ${quantity} 
        <span>ราคา: ฿${price} ต่อหน่วย</span> 
        <span>รวม: ฿${totalPrice}</span>
        <span class="remove-item" onclick="removeItem(this)">ลบ</span>
    `;
    orderList.appendChild(orderItem);

    // คำนวณยอดรวม
    totalAmount += totalPrice;
    orderTotal.innerHTML = `ยอดรวม: ฿${totalAmount}`;
}

// ฟังก์ชันลบรายการ
function removeItem(item) {
    const price = item.parentElement.querySelector('span:nth-child(2)').textContent.split(' ')[1];
    totalAmount -= parseInt(price);
    orderTotal.innerHTML = `ยอดรวม: ฿${totalAmount}`;
    item.parentElement.remove();
}

// ฟังก์ชันยืนยันการสั่งซื้อ
function confirmOrder() {
    alert(`ยอดรวมการสั่งซื้อทั้งหมด: ฿${totalAmount}`);
    // ที่นี่คุณสามารถเพิ่มฟังก์ชันการยืนยันการสั่งซื้อเพิ่มเติม เช่น การส่งข้อมูลไปยังเซิร์ฟเวอร์
}
