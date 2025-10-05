// Smooth scroll for internal links, hamburger menu, scroll-to-top, language toggle, small interactive tweaks
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu for mobile
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.main-nav');
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    // Close menu on nav link click (mobile)
    document.querySelectorAll('.main-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 600) {
                nav.classList.remove('open');
            }
        });
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({ top: target.offsetTop - 30, behavior: 'smooth' });
                }
            }
        });
    });

    // Language toggle for video text
    const arabicBtn = document.getElementById('arabicBtn');
    const englishBtn = document.getElementById('englishBtn');
    const videoTextDiv = document.getElementById('videoText');

    const arabicText = `تعرف على القمر الصناعي "تيرا" التابع لناسا – عين الأرض التي لا تنام، تراقب كوكبنا كل يوم بلا توقف.
بفضل خمسة أجهزة علمية متطورة، جمع "تيرا" خلال مهمته أكثر من 9000 يوم من البيانات الحيوية عن كوكبنا.

من رصد تلوث أول أكسيد الكربون ومراقبة الأعاصير إلى تتبع ارتفاع درجات الحرارة وإزالة الغابات والتوسع العمراني، يكشف "تيرا" لنا قصص الأرض وتغيراتها.

ويُظهر هذا العرض كيف تساعدنا بيانات "تيرا" في فهم آثار حرائق الغابات، ومواجهة تحديات تغير المناخ، وتطوير طرق لحماية مستقبلنا.

مهمة "تيرا" ليست مجرد أرقام وبيانات، بل هي رؤية نحو جعل الأرض مكانًا أكثر أمانًا وصحةً للأجيال القادمة.

وبينما نحتفل بـ 25 عامًا من الابتكار والالتزام، ندعوك للانضمام إلى رحلتنا لحماية كوكبنا.
معًا، يمكننا أن نصنع الفارق.`;
    const englishText = `Meet NASA's Terra satellite, tirelessly observing our planet every single day. Equipped with five powerful instruments, Terra has gathered over 9,000 days of Earth data. From tracking carbon monoxide pollution to monitoring hurricanes, Terra does it all. Imagine seeing rising temperatures, deforestation, and urban growth all mapped out. This animation shows how Terra's data helps us understand changes on Earth. From wildfire impacts to how we protect our future, every bit counts. Terra's story is more than just data. It's about making our planet better. So let's celebrate 25 years of innovation and dedication to our home. Join us in this journey to protect our Earth. Together, we can make a difference.`;

    // Set default to Arabic and set button state
    function setArabic() {
        videoTextDiv.textContent = arabicText;
        videoTextDiv.classList.add('rtl');
        arabicBtn.classList.add('active');
        englishBtn.classList.remove('active');
    }
    function setEnglish() {
        videoTextDiv.textContent = englishText;
        videoTextDiv.classList.remove('rtl');
        englishBtn.classList.add('active');
        arabicBtn.classList.remove('active');
    }

    arabicBtn.addEventListener('click', setArabic);
    englishBtn.addEventListener('click', setEnglish);

    setArabic(); // default

    // Scroll to top button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Accessibility: Add aria-labels to nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.setAttribute('aria-label', link.textContent);
    });


});