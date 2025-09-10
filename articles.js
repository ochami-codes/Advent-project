document.addEventListener("DOMContentLoaded", () => {
      const articles = [
        {
          title: `"I Never Knew You" — The Dangers of Outward Religion`,
          summary: "Outward faith isn't enough—Christ must know you personally.",
          link: "never_knew.html",
          image: "never_knew.png",
          alt: "I Never Knew You"
        },
        {
          title: `"God Will Do It In You" — Claiming Ezekiel 36`,
          summary: "Let God create in you a new heart by surrender.",
          link: "righteousness.html",
          image: "new_heart.png",
          alt: "God Will Do It In You"
        },
        {
          title: "Undue Familiarity — A Subtle Snare",
          summary: "Emotional entanglements can dull your spiritual edge",
          link: "familiarity.html",
          image: "familiarity.jpg",
          alt: "Undue Familiarity"
        },
        {
          title: "Why Christ Delays",
          summary: "Understand the real reason Jesus hasn’t returned yet",
          link: "delayed.html",
          image: "delayed.jpg",
          alt: "Why Christ Delays"
        },
        {
          title: "Faithfulness In a Faithless Generation",
          summary: "Can you still obey God when most won't?",
          link: "faithfulness_dev.html",
          image: "faithful.jpg",
          alt: "Faithfulness"
        },
        {
          title: "When God Lets Go",
          summary: "Mercy has limits. Use your time wisely",
          link: "letgo.html",
          image: "let_go.jpg",
          alt: "When God Lets Go"
        },
        {
          title: "God With Us",
          summary: "God is closer than you think—even in silence",
          link: "gods_love.html",
          image: "emmanuel.jpg",
          alt: "God With Us"
        },
        {
          title: "Am I My Brother's Keeper?",
          summary: "Your life may be the light someone needs",
          link: "keeper.html",
          image: "keeper.jpg",
          alt: "My Brother's Keeper"
        },
        {
          title: "Almost Saved, Eternally Lost",
          summary: "Being close isn't enough—are you fully surrendered?",
          link: "almost_saved.html",
          image: "almost.jpg",
          alt: "Almost Saved"
        },
        {
          title: "Look and Live",
          summary: "Salvation is offered, will you accept and live?",
          link: "look_live.html",
          image: "look_live.jpg",
          alt: "Look and Live"
        },
        {
          title: "The Seventh Commandment Under Siege",
          summary: "Purity is under attack. How will you survive?",
          link: "call_purity.html",
          image: "siege.png",
          alt: "Purity under attack"
        },
        {
          title: "The Danger of Delay",
          summary: "Delaying obedience may cost your eternity ",
          link: "no_time.html",
          image: "delay.jpg",
          alt: "Danger of Delay"
        },
        {
          title: "God's Promises in Trials",
          summary: "Trials test, but also strengthen your faith.",
          link: "promise_trials.html",
          image: "promises.jpg",
          alt: "God's Promises"
        },
        {
          title: "When Doubt Silences Us",
          summary: "Doubt can mute your witness, believe and speak",
          link: "doubt_warning.html",
          image: "doubt.jpg",
          alt: "Doubt Silences"
        },
        {
          title: "True Worship",
          summary: "God is more concerned about the condition of our hearts than our offerings.",
          link: "accepted.html",
          image: "true_worship.jpg",
          alt: "True Worship"
        },
        {
          title: "Last Night In Sodom",
          summary: "Individuals of Sodom filled up the cup of their iniquity, are you filling yours too?",
          link: "sodom.html",
          image: "sodom.png",
          alt: "Sodom"
        },
        {
          title: "The Key For Divine Blessing",
          summary: "Wondering why there seems to be holes in your pocket? You may be under the divine curse.",
          link: "tithe.html",
          image: "blessings.png",
          alt: "Divine Curse"
        },
        {
          title: "Masturbation and Pornography",
          summary: "Masturbation and pornography—a deadly duo",
          link: "secret.html",
          image: "chains.jpg",
          alt: "Deadly Duo"
        },
        {
          title: "Waiting for a Godly Wife in a Godless Church Age",
          summary: "In our current churches godly women are rare to find, and so are godly men.",
          link: "godly_wife.html",
          image: "patient.jpg",
          alt: "Godly Spouses"
        },
        {
          title: "Abominable Prayers",
          summary: "Are your prayers abominable to God?",
          link: "abomination.html",
          image: "abominable.jpg",
          alt: "Abominable Prayers"
        },
        {
          title: "Even the Monkeys Knows It's Sabbath",
          summary: "Who feeds you? God or your business...",
          link: "monkey.html",
          image: "sunset.png",
          alt: "Sabbath Sunset"
        },
        {
          title: "Using AI for the Final Gospel Call",
          summary: "What if AI is the endtime gift from God to propel the everlasting gospel around the globe?",
          link: "ai.html",
          image: "ai.png",
          alt: "AI and the Gospel"
        },
        {
          title: `"It Is Too Late!” – The Tragic End of Judas Iscariot`,
          summary: "Do you have elements of Judas Iscariot in you? Time to reconsider your christian walk.",
          link: "Judas.html",
          image: "judas.jpg",
          alt: "Judas Iscariot"
        },
        {
            title: "The First Sabbath Choir in the New Jerusalem",
            summary: "Ever thought how Sabbath choir will look like while Christ is choristering? Let us open up our imaginations!",
            link:"choir.html",
            image: "choir.jpg",
            alt: "Heavenly Choir"
        },
                {
            title: "Where Is Thy Beautiful Flock",
            summary: "Where are your children? A solemn question for the modern mothers.",
            link:"little_flock.html",
            image: "flock.png",
            alt: "Mother and child holding hands."
        },
        
        {
            title: "Lessons From Cancer And The Fall Of Lucifer",
            summary: "Cancer comes as a result of a rebellious cell that has refused regulations. Let's garner lessons here.",
            link: "cancer.html",
            image: "cancer.jpg",
            alt: "Normal vs Cancer Cell"
        }
      ];

      const listContainer = document.querySelector(".devotion-list");
      const searchInput = document.getElementById("searchInput");

      function highlightText(text, searchValue) {
        if (!searchValue) return text;
        const regex = new RegExp(`(${searchValue})`, "gi");
        return text.replace(regex, "<mark>$1</mark>");
      }

      function renderArticles(list, searchValue = "") {
        listContainer.innerHTML = "";
        if (list.length === 0) {
          listContainer.innerHTML = "<p>No matching articles found 🙁</p>";
          return;
        }

        list.forEach(article => {
          const articleLink = document.createElement("a");
          articleLink.href = article.link;
          articleLink.className = "devotion-item-link";

          const itemDiv = document.createElement("div");
          itemDiv.className = "devotion-item";

          const img = document.createElement("img");
          img.src = article.image;
          img.alt = article.alt;

          const textDiv = document.createElement("div");
          textDiv.className = "devotion-text";

          const h3 = document.createElement("h3");
          h3.innerHTML = highlightText(article.title, searchValue);

          const p = document.createElement("p");
          p.innerHTML = highlightText(article.summary, searchValue);

          textDiv.appendChild(h3);
          textDiv.appendChild(p);
          itemDiv.appendChild(img);
          itemDiv.appendChild(textDiv);
          articleLink.appendChild(itemDiv);

          listContainer.appendChild(articleLink);
        });
      }

      searchInput.addEventListener("input", () => {
        const searchValue = searchInput.value.toLowerCase();
        const filtered = articles.filter(article =>
          article.title.toLowerCase().includes(searchValue) ||
          article.summary.toLowerCase().includes(searchValue)
        );
        renderArticles(filtered, searchValue);
      });

      renderArticles(articles);

      const scrollTopBtn = document.getElementById("scrollTopBtn");
      window.addEventListener("scroll", () => {
        scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
      });
      scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });