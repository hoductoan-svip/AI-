function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    const chatBox = document.getElementById('chat-box');

    // Hiển thị tin nhắn của người dùng
    const userMessage = document.createElement('div');
    userMessage.textContent = `Bạn: ${userInput}`;
    chatBox.appendChild(userMessage);

    // Gửi yêu cầu đến AI
    getAiResponse(userInput).then(response => {
        const aiMessage = document.createElement('div');
        aiMessage.textContent = `AI: ${response}`;
        chatBox.appendChild(aiMessage);
        chatBox.scrollTop = chatBox.scrollHeight;  // Tự động cuộn xuống cuối
    });

    document.getElementById('user-input').value = '';  // Xóa nội dung nhập sau khi gửi
}

async function getAiResponse(userInput) {
    const responses = [
        "Hì hì, bạn nói gì mình nghe không rõ lắm!",
        "Câu này hơi khó, để mình suy nghĩ chút nhé!",
        "Mình thấy bạn rất thông minh đấy!",
        "Ôi, điều đó thật thú vị!",
        "Mình cũng đang nghĩ giống bạn đó!",
        "Haha, buồn cười quá, kể mình nghe thêm đi!",
        "Bạn biết không? Mình rất thích trò chuyện với bạn!",
        "Hmm... mình chưa chắc về điều đó, nhưng nghe cũng hợp lý!",
        "Thật dễ thương quá đi!",
        "Bạn có muốn mình kể chuyện cười không?",
        "Địt cmm thg quyền ngu",
        "Địt cmm thg quyền ăn cứt chó",
        "quyền ăn cứt",
        "quyền ăn lol"
        
    ];

    // Chọn ngẫu nhiên một câu trả lời từ mảng
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    // Giả lập thời gian chờ để AI trả lời
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(randomResponse);
        }, 1000);
    });
}