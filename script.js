document.getElementById('startButton')?.addEventListener('click', function() {
    window.location.href = 'chat.html';
});

var hadithLinks = document.querySelectorAll('.hadith-div a');

var currentlyDisplayed = null;

hadithLinks.forEach(function(hadithLink) {
    hadithLink.addEventListener('click', function(event) {
        event.preventDefault();

        var hadithText = hadithLink.nextElementSibling;

        if (currentlyDisplayed) {
            currentlyDisplayed.style.display = "none";
        }

        if (hadithText !== currentlyDisplayed) {
            hadithText.style.display = "block";
            currentlyDisplayed = hadithText;
        } else {
            currentlyDisplayed = null;
        }
    });
});


$(document).ready(function() {
  $("#chat-form").on("submit", function(e) {
      e.preventDefault();

      let userInput = $("#chat-input").val();

      if (userInput.length > 0) {
          let userHtml = `<p class="user-input">${userInput}</p>`;
          $("#chat-messages").append(userHtml);
          $("#chat-input").val("");
          
          getBotResponse(userInput);
      }
  });
});

function getBotResponse(userInput) {
  let botResponse = generateBotResponse(userInput);
  let botHtml = `<p class="bot-response">${botResponse}</p>`;
  $("#chat-messages").append(botHtml);
}

function generateBotResponse(userInput) {
  userInput = userInput.toLowerCase();

  if (userInput.includes("five pillars")) {
    return "The Five Pillars of Islam are Shahada (faith), Salah (prayer), Zakat (charity), Sawm (fasting during Ramadan), and Hajj (pilgrimage to Mecca).";
    }
    
    else if (userInput.includes("sunnah")) {
    return "Sunnah refers to the practices, customs and traditions of Prophet Muhammad, which Muslims try to emulate.";
    }
    
    else if (userInput.includes("shi'a")) {
    return "Shi'a Islam is the second largest branch of Islam, characterized by the belief that Ali, cousin of Prophet Muhammad, was his rightful successor.";
    }
    
    else if (userInput.includes("sufism")) {
    return "Sufism is a mystical tradition of Islam, focused on the spiritual journey towards experiencing God directly.";
    }
    
    else if (userInput.includes("prophet muhammad")) {
    return "Prophet Muhammad is the founder of Islam, revered as the last messenger of Allah in Islamic.";
    }
    
    else if (userInput.includes("caliphate")) {
    return "Caliphate refers to the political-religious state led by a caliph, considered a successor to Prophet Muhammad.";
    }
    
    else if (userInput.includes("jihad")) {
    return "Jihad is an Arabic term often translated as 'struggle' or 'striving'. It can refer to a personal, internal struggle or a collective, physical struggle for justice or against oppression.";
    }
    
    else if (userInput.includes("halal")) {
    return "Halal refers to what is permissible in Islamic law, often used in the context of food that is lawful to consume.";
    }
    
    else if (userInput.includes("hijab")) {
    return "Hijab is a head covering worn by some Muslim women in the presence of any male outside of their immediate family.";
    }
    
    else if (userInput.includes("tawhid")) {
    return "Tawhid is the fundamental Islamic belief in the oneness of God.";
    }
    
    else if (userInput.includes("ramadan")) {
    return "Ramadan is the ninth month of the Islamic lunar calendar, observed by Muslims worldwide as a month of fasting, prayer, reflection, and community.";
    }
    
  else if (userInput.includes("mecca")) {
    return "Mecca is the birthplace of Prophet Muhammad and the site of the Kaaba, the holiest shrine in Islam.";
  } 
  else if (userInput.includes("medina")) {
    return "Medina is the city where Prophet Muhammad migrated to and where he was buried. It is the second holiest city in Islam.";
  } 
  else if (userInput.includes("islamic art")) {
    return "Islamic art is known for its geometric patterns, calligraphy, and lack of representational figures, due to the Islamic prohibition against depicting sentient beings.";
  }
  else if (userInput.includes("sharia law")) {
    return "Sharia law is the religious legal system governing the members of the Islamic faith. It is derived from the Quran and the teachings of Prophet Muhammad.";
  }
  else if (userInput.includes("hello")) {
      return "Hello! How can I assist you today?";
  } else if (userInput.includes("quran")) {
      return "The Quran is the holy book of Islam, revealed to Prophet Muhammad over a period of 23 years.";
  } else if (userInput.includes("hadith")) {
      return "Hadiths are the sayings and actions of Prophet Muhammad, serving as an important source of Islamic teachings.";
  } else {
      return "I'm sorry, I didn't understand that. Could you please rephrase or ask something else?";
  }
}


function getBotResponse(userInput) {
  let botResponse = generateBotResponse(userInput);
  let botResponseWords = botResponse.split(" ");
  let delay = 50; // delay between each word

  // Initial delay before starting to 'type'
  setTimeout(function() {
      let botHtml = `<p class="bot-response"></p>`;
      $("#chat-messages").append(botHtml);
      let i = 0;
      
      // 'Typing' effect
      let typingInterval = setInterval(function() {
          if (i < botResponseWords.length) {
              let botMessageElement = $(".bot-response").last();
              botMessageElement.html(botMessageElement.html() + " " + botResponseWords[i]);
              i++;
          } else {
              clearInterval(typingInterval); // stop typing
          }
      }, delay);
  }, 500); // initial delay before typing starts
}

/*window.onload = function() {
  const chatForm = document.getElementById('chat-form');
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');

  // Event listener for chat form submission
  chatForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh on form submit

    let userInput = chatInput.value.trim(); // Get & trim user input

    if (userInput) {
      appendMessage(userInput, 'user');

      // Empty the input field after sending a message
      chatInput.value = '';
      
      // Fetch data from the API
      fetch(`https://muslimscholars.info/api/endpoint?query=${userInput}`)
        .then(response => response.json())
        .then(data => {
          let botResponse = data.response; // You'll need to adjust this line depending on the structure of your response data
          appendMessage(botResponse, 'bot');
        })
        .catch(error => {
          console.error('Error:', error);
          appendMessage("Sorry, I can't fetch the information right now.", 'bot');
        });
    }
  });
  

  // Function to append message to the chat
  function appendMessage(message, sender) {
    let messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.className = sender;
    chatMessages.appendChild(messageDiv);
    
    // Automatically scroll to the bottom of chat messages
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}
*/