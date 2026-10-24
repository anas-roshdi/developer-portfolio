# جرد وتوثيق شامل لمشروع معرض الأعمال (Developer Portfolio)

> **تاريخ إعداد الجرد:** 24 أكتوبر 2026  
> **حالة المستودع:** فحص كامل للملفات، البنية، البيانات، ونواقص القالب دون إجراء أي تعديلات برمجية.

---

## 1. التقنية والإطار والترخيص

### الإطار والمكتبات الأساسية (من `package.json`)
* **إطار العمل الأساسي:** [Next.js](https://nextjs.org/) بإصدار `^16.1.1` ويعمل بهيكلية **App Router**.
* **مكتبة الواجهة:** [React](https://react.dev/) بإصدار `^19.2.3` و `react-dom` بإصدار `^19.2.3`.
* **التنسيق والأنماط:**
  * [Tailwind CSS](https://tailwindcss.com/) بإصدار `latest` مع `@tailwindcss/postcss` بإصدار `^4.1.16`.
  * `sass` بإصدار `^1.69.5` (ملفات أنماط SCSS).
  * `postcss` و `autoprefixer` بالإصدارات الأخيرة.
* **حزم المكونات والتفاعل:**
  * `@next/third-parties` (`^16.0.1`): دمج Google Tag Manager.
  * `axios` (`^1.6.8`): طلبات HTTP و Formspree / Telegram API.
  * `lottie-react` (`^2.4.1`): تشغيل رسوميات Lottie المتحركة.
  * `react-fast-marquee` (`^1.6.2`): شريط تمرير المهارات المتحرك.
  * `react-icons` (`^4.11.0`): حزمة الأيقونات المتنوعة.
  * `react-toastify` (`^10.0.4`): إشعارات التنبيه المنبثقة.
  * `sharp` (`^0.33.5`): معالجة وتحسين الصور في Next.js.
  * `nodemailer` (`^6.9.15`): إرسال رسائل البريد عبر مسار API الخلفي.
  * `react-google-recaptcha` (`^3.1.0`): مكون كابتشا غوغل.
  * `@emailjs/browser` (`^4.3.1`): مثبت في التبعيات كخيار بديل للمراسلة.
* **بيئة التطوير والفحص:**
  * `eslint` (`latest` - إصدار v9) مع `eslint-config-next` (`^16.0.1`).

### اسم القالب الأصلي ومصدره
* **في `package.json`:** مذكور بالوصف: `"description": "Portfolio of Abu Said"`.
* **في `README.md`:** القالب مبني على مستودع [said7388/developer-portfolio](https://github.com/said7388/developer-portfolio) للمطور **Abu Said**، ورابط المعاينة الأصلي للقالب هو `https://abusaid.netlify.app/`.
* **في `utils/data/skills.js`:** يوجد تعليق في السطر 18 يربط القالب بنسخة أقدم من تطوير [hhhrrrttt222111/developer-portfolio](https://github.com/hhhrrrttt222111/developer-portfolio).
* **في `.github/FUNDING.yml`:** ما زالت مسجلة أسماء حسابات الدعم للمؤلف الأصلي (`said7388` و `abusaid`).

### شروط الترخيص (هل يلزم ذكر المؤلف؟)
* **نوع الترخيص:** رخصة **MIT** (MIT License).
* **الشروط القانونية للرخصة:**
  * تسمح الرخصة بالاستخدام المجاني، والتعديل، والتوزيع، والدمج، والنشر، والاستخدام التجاري أو الشخصي.
  * **الشرط الإلزامي الوحيد:** يجب تضمين إشعار حقوق النشر الأصلي (Copyright Notice) وإشعار الترخيص في جميع النسخ أو الأجزاء الجوهرية من البرنامج (`The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software`).
  * **الموقف في المشروع الحالي:** تم حذف ملف `LICENSE` من جذر المشروع، وتم استبدال اسم المؤلف في التذييل (`footer.jsx`) برابط أنس تلكة دون الإشارة للمؤلف الأصلي، وهو ما يتعارض تقنياً مع شرط الاحتفاظ بإشعار حقوق النشر لرخصة MIT في حال كان المستودع منشوراً بشكل عام.

---

## 2. هيكل المجلدات وأماكن تخزين المحتوى

### شجرة المجلدات المختصرة
```text
developer-portfolio/
├── .github/
│   └── FUNDING.yml                  # حسابات دعم القالب الأصلي
├── app/                             # مجلد Next.js App Router الأساسي
│   ├── api/                         # المسارات الخلفية (Backend Routes)
│   │   ├── contact/route.js         # معالج إرسال الإيميل والتيليجرام (مهمل في الواجهة)
│   │   ├── data/route.js            # مسار تجريبي بسيط يعيد 'hle!'
│   │   └── google/route.js          # التحقق من reCAPTCHA
│   ├── assets/                      # أصول التصميم المضمنة
│   │   ├── lottie/                  # ملفات JSON للرسوم المتحركة
│   │   └── svg/                     # أيقونات المهارات والتعليم والخبرة
│   ├── blog/                        # صفحة المدونة
│   │   └── page.js
│   ├── components/                  # مكونات React
│   │   ├── footer.jsx               # التذييل
│   │   ├── navbar.jsx               # شريط التنقل العلوي
│   │   ├── helper/                  # أدوات مساعدة (glow-card, lottie, scroll)
│   │   └── homepage/                # أقسام الصفحة الرئيسية
│   │       ├── about/               # قسم نبذة عني
│   │       ├── blog/                # قسم المدونة (معطل بالصفحة الرئيسية)
│   │       ├── contact/             # قسم ونموذج التواصل (Formspree)
│   │       ├── education/           # قسم التعليم وشعار الجامعة
│   │       ├── experience/          # قسم الخبرات (معطل بالصفحة الرئيسية)
│   │       ├── hero-section/        # قسم البطل والبطاقة البرمجية
│   │       ├── projects/            # قسم المشاريع والنافذة المنبثقة للصور
│   │       └── skills/              # شريط المهارات المتحرك
│   ├── css/
│   │   ├── card.scss                # تأثيرات الإضاءة والبطاقات
│   │   └── globals.scss             # الأنماط العامة ومتغيرات CSS
│   ├── layout.js                    # التخطيط العام، البيانات الوصفية و GTM
│   ├── not-found.jsx                # صفحة الخطأ 404
│   └── page.js                      # الصفحة الرئيسية وتجميع الأقسام
├── public/                          # الملفات العامة المباشرة
│   ├── image/                       # صور توضيحية قديمة متبقية من القالب
│   ├── png/                         # صور بصيغة PNG
│   ├── projects/                    # لقطات شاشة المشاريع الخاصة بأنس
│   │   ├── devo/                    # صور مشروع ديفو
│   │   ├── e-plant/                 # صور متجر النباتات
│   │   ├── lammeh/                  # صور لعبة لمة
│   │   ├── nfc-attendance/          # صور نظام التحضير الذكي
│   │   └── quran-journey/           # صور تطبيق رحلة القرآن
│   ├── profile.png                  # الصورة الشخصية
│   ├── resume.pdf                   # ملف السيرة الذاتية PDF
│   └── uqu-logo.png                 # شعار جامعة أم القرى
├── utils/                           # مخزن البيانات والدوال المساعدة
│   ├── data/                        # [موقع تخزين المحتوى الأساسي]
│   │   ├── contactsData.js          # بيانات الاتصال
│   │   ├── educations.js            # المؤهلات الأكاديمية
│   │   ├── experience.js            # الخبرات العملية (مصفوفة فارغة)
│   │   ├── personal-data.js         # البيانات الشخصية والنبذة
│   │   ├── projects-data.js         # بيانات وتفاصيل كافة المشاريع
│   │   └── skills.js                # قائمة المهارات التقنية
│   ├── check-email.js               # التحقق من صحة البريد
│   ├── skill-image.js               # مطابقة الأيقونات بالمهارات
│   └── time-converter.js            # تحويل تواريخ المقالات
├── package.json
├── tailwind.config.js
└── next.config.js
```

### أين يُخزن المحتوى؟
1. **ملفات البيانات المركزية (`utils/data/`):**
   * المحتوى الرئيسي (المشاريع، النبذة، المهارات، المؤهلات الأكاديمية، روابط التواصل) مفصول ومخزن داخل ملفات كائنات ومصفوفات JavaScript ضمن مجلد `utils/data/`.
2. **محتوى مكتوب بشكل مباشر داخل المكونات (Hardcoded):**
   * **قسم البطل (`HeroSection`):** البطاقة البرمجية على اليمين تحتوي على قائمة مهارات خاصة كُتبت داخل الكود مباشرة ولا تأتي من `skills.js`.
   * **قسم التعليم (`Education`):** جملة مرتبة الشرف والمعدل `"First Class Honors (GPA: 3.84/4.00)"` كُتبت نصياً في المكون.
   * **شريط التنقل (`Navbar`):** الروابط الأربعة والاسم كُتبت في المكون مباشرة.
   * **التذييل (`Footer`):** نص الحقوق وروابط المستودع ولينكدإن كُتبت في المكون مباشرة.
   * **نموذج الاتصال (`ContactForm`):** نص الترحيب ورابط خدمة Formspree كُتبت في المكون مباشرة.

---

## 3. محتوى كل قسم نصاً حرفياً

### 1) شريط التنقل (Navbar)
* **الشعار / الاسم:** `Anas Tilika` (رابط إلى `/`)
* **عناصر القائمة:**
  1. `ABOUT` (رابط: `/#about`)
  2. `SKILLS` (رابط: `/#skills`)
  3. `EDUCATION` (رابط: `/#education`)
  4. `PROJECTS` (رابط: `/#projects`)

---

### 2) قسم البطل / الرئيسية (Hero Section)
* **العنوان الترحيبي:**
  > Hello,  
  > I'm **ِAnas Tilika**, a Professional **Software Developer & Mobile App Developer**.
* **الروابط الاجتماعية في البطل:**
  * GitHub: `https://github.com/anas-roshdi`
  * LinkedIn: `https://www.linkedin.com/in/anas-tilika-925a6b212/`
  * (روابط Facebook, LeetCode, Twitter فارغة في البيانات فلا تظهر).
* **أزرار الإجراء (CTAs):**
  * زر: `CONTACT ME` (رابط إلى `#contact`)
  * زر: `GET RESUME` (رابط يفتح `/resume.pdf` في نافذة جديدة)
* **البطاقة البرمجية التفاعلية (المحاكية للكود):**
```javascript
const coder = {
  name: 'ِAnas Tilika',
  skills: ['React Native', 'Node JS', 'React', 'SQlite', 'Git', 'Java', 'HTML', 'CSS', 'Python', 'Scikit-learn', 'Pandas', 'Javascript', 'Typescript', 'MySql'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 12
    );
  };
};
```

---

### 3) قسم نبذة عني (About Me)
* **عنوان القسم الجانبي:** `ABOUT ME`
* **العنوان الفرعي:** `WHO I AM?`
* **النص الحرفي للنبذة:**
  > "I am a Computer Science graduate from Umm Al-Qura University with First Class Honors (GPA 3.84/4.00). I am a passionate software engineer with a strong focus on Mobile Application Development and a solid background in Machine Learning. I enjoy solving complex problems, designing intuitive user interfaces, and building secure, scalable applications."
* **الصورة الشخصية:** `/profile.png`

---

### 4) قسم المهارات (Skills)
* **عنوان القسم:** `Skills`
* **طريقة العرض:** شريط متحرك تلقائياً (Marquee) يعرض الأيقونة واسم المهارة.
* **المهارات المعروضة حرفياً (12 مهارة):**
  1. `HTML`
  2. `CSS`
  3. `Javascript`
  4. `Typescript`
  5. `React`
  6. `MySQL`
  7. `Figma`
  8. `Pytorch`
  9. `Tensorflow`
  10. `Python`
  11. `Git`
  12. `Java`

---

### 5) قسم الخبرات (Experience) - [معطل حالياً في الصفحة الرئيسية]
* **عنوان القسم في الكود:** `Experiences`
* **رسم Lottie التوضيحي:** `app/assets/lottie/code.json`
* **محتوى البيانات في `utils/data/experience.js`:**
  * مصفوفة فارغة `export const experiences = [];`.
* **الحالة في الصفحة الرئيسية:** تم تعطيل استدعاء المكون في `app/page.js`:
  `{/* <Experience /> */}`

---

### 6) قسم التعليم (Education)
* **عنوان القسم:** `Education`
* **الشعار المعروض:** صورة شعار جامعة أم القرى `/uqu-logo.png`
* **بيانات المؤهل الأكاديمي:**
  * **الدرجة:** `Bachelor Degree in Computer Science`
  * **الفترة الزمنية:** `2021 - 2025`
  * **الجامعة:** `Umm Al-Qura University`
  * **الوصف التوضيحي:** `First Class Honors (GPA: 3.84/4.00)`

---

### 7) قسم المشاريع (Projects)
* **عنوان القسم:** `PROJECTS`
* **آلية العرض:** بطاقات متتالية بتأثير التثبيت (Sticky Stacking Cards).
* **ملاحظة برمجية هامة:** يتم عرض أول 5 مشاريع فقط عبر `projectsData.slice(0, 5)`، والمشروعان 6 و 7 لا يظهران في واجهة المستخدم الحالية.

#### تفاصيل المشاريع السبعة المسجلة في `projects-data.js`:

#### مشروع 1: Lammeh - Social Party Game
* **العنوان:** `Lammeh - Social Party Game`
* **الدور (Role):** `Mobile App Developer`
* **التقنيات (Tools):** `React Native`, `TypeScript`, `SQLite`, `EAS Build`, `Git`
* **الوصف:**
  > "Developed an offline multiplayer social deduction game for Android, and managed the complete app deployment lifecycle, from version control with Git to EAS building and Google Play Console submission."
* **رابط الكود:** [https://github.com/anas-roshdi/Lammeh](https://github.com/anas-roshdi/Lammeh)
* **رابط الديمو:** فارغ `''`
* **الصور (8 لقطات شاشة):**
  * `/projects/lammeh/home.jpeg`
  * `/projects/lammeh/selectCategory.jpeg`
  * `/projects/lammeh/addPlayers.jpeg`
  * `/projects/lammeh/Role1.jpeg`
  * `/projects/lammeh/Role2.jpeg`
  * `/projects/lammeh/Hinting.jpeg`
  * `/projects/lammeh/Guess.jpeg`
  * `/projects/lammeh/Results.jpeg`

#### مشروع 2: Quran Journey App (In Progress)
* **العنوان:** `Quran Journey App (In Progress)`
* **الدور (Role):** `Mobile App Developer`
* **التقنيات (Tools):** `React Native`, `TypeScript`, `JSX`, `Git`
* **الوصف:**
  > "Currently developing a comprehensive educational mobile app featuring role-based dashboards, interactive learning modules, dynamic memorization roadmaps, and a scalable front-end architecture."
* **رابط الكود:** [https://github.com/anas-roshdi/quran-journey-app](https://github.com/anas-roshdi/quran-journey-app)
* **رابط الديمو:** فارغ `''`
* **الصور (33 لقطة شاشة):**
  * `/projects/quran-journey/LoginScreen.jpeg`, `/projects/quran-journey/StudentDashboardScreen.jpeg`, `/projects/quran-journey/NotificationsScreen.jpeg`, `/projects/quran-journey/StudentDashboardScreen2.jpeg`, `/projects/quran-journey/TestsScreen.jpeg`, `/projects/quran-journey/TestsScreen2.jpeg`, `/projects/quran-journey/LearnTajweedScreen.jpeg`, `/projects/quran-journey/ChallengesScreen.jpeg`, `/projects/quran-journey/ChallengesScreen2.jpeg`, `/projects/quran-journey/MemorizationPlanScreen.jpeg`, `/projects/quran-journey/MemorizationPlanScreen2.jpeg`, `/projects/quran-journey/LeaderboardScreen.jpeg`, `/projects/quran-journey/LeaderboardScreen2.jpeg`, `/projects/quran-journey/StudentClassesScreen.jpeg`, `/projects/quran-journey/StudentClassesScreen2.jpeg`, `/projects/quran-journey/ProfileScreen.jpeg`, `/projects/quran-journey/ProfileScreen4.jpeg`, `/projects/quran-journey/EditProfileScreen.jpeg`, `/projects/quran-journey/ChangePasswordScreen.jpeg`, `/projects/quran-journey/AchievementsScreen.jpeg`, `/projects/quran-journey/CodeparentScreen.jpeg`, `/projects/quran-journey/TeacherDashboardScreen.jpeg`, `/projects/quran-journey/TeacherDashboardScreen2.jpeg`, `/projects/quran-journey/TeacherTestsScreen.jpeg`, `/projects/quran-journey/TeacherTestsScreen2.jpeg`, `/projects/quran-journey/CreateTestSessionScreen.jpeg`, `/projects/quran-journey/JoinRequestsScreen.jpeg`, `/projects/quran-journey/ProfileScreen2.jpeg`, `/projects/quran-journey/TeacherClassesScreen.jpeg`, `/projects/quran-journey/ParentDashboardScreen.jpeg`, `/projects/quran-journey/ParentDashboardScreen2.jpeg`, `/projects/quran-journey/MyChildrenScreen.jpeg`, `/projects/quran-journey/ParentReportsScreen.jpeg` *(ملاحظة: تكررت ProfileScreen4 مرتين في القائمة)*.

#### مشروع 3: Devo - Unified Business Management System
* **العنوان:** `Devo - Unified Business Management System`
* **الدور (Role):** `Software Engineer`
* **التقنيات (Tools):** `Python`, `Tkinter`, `SQLite`, `Pandas`, `Matplotlib`, `Scikit-learn`, `PyInstaller`, `Inno Setup`, `Git`
* **الوصف:**
  > "Architected and delivered a standalone, bilingual (AR/EN) desktop accounting and inventory management system. Built an adaptive AI WhatsApp engine that transforms unstructured text messages into verified sales invoices, complete with continuous user-correction learning. Integrated real-time analytics dashboards using Pandas and Matplotlib, and packaged the entire production distribution into a zero-configuration Windows installer using PyInstaller and Inno Setup."
* **رابط الكود:** [https://github.com/anas-roshdi/devo](https://github.com/anas-roshdi/devo)
* **رابط الديمو:** [https://github.com/anas-roshdi/devo/releases](https://github.com/anas-roshdi/devo/releases)
* **الصور (9 لقطات شاشة):**
  * `/projects/devo/devo-cover.png`
  * `/projects/devo/Homepage.png`
  * `/projects/devo/ProductManagment.png`
  * `/projects/devo/CustomerManagment.png`
  * `/projects/devo/SalesInvoice.png`
  * `/projects/devo/PurchaseInvoice.png`
  * `/projects/devo/Report.png`
  * `/projects/devo/Report2.png`
  * `/projects/devo/TopProducts.png`

#### مشروع 4: Smart Attendance System (NFC)
* **العنوان:** `Smart Attendance System (NFC)`
* **الدور (Role):** `Lead Developer`
* **التقنيات (Tools):** `Java`, `NFC Technology`, `SQL Server`, `Android Studio`
* **الوصف:**
  > "My Graduation Project: Developed an automated attendance system using NFC technology and Java. The system streamlines the process of tracking student attendance with high accuracy and provides real-time data for school administration."
* **رابط الكود:** [https://github.com/anas-roshdi/Smart_attendance_system](https://github.com/anas-roshdi/Smart_attendance_system)
* **رابط الديمو:** فارغ `''`
* **الصور (6 لقطات شاشة):**
  * `/projects/nfc-attendance/login.jpg`
  * `/projects/nfc-attendance/nfc-scan-1.jpg`
  * `/projects/nfc-attendance/nfc-scan-2.jpg`
  * `/projects/nfc-attendance/nfc-scan-3.jpg`
  * `/projects/nfc-attendance/add-course.jpg`
  * `/projects/nfc-attendance/edit-student.jpg`

#### مشروع 5: E-Plant Shopping App
* **العنوان:** `E-Plant Shopping App`
* **الدور (Role):** `Front-End Developer`
* **التقنيات (Tools):** `React`, `Redux`, `Tailwind CSS`, `Vite`
* **الوصف:**
  > "Created a responsive E-commerce front-end application for a plant nursery. Used React and Redux Toolkit for state management, focusing on a seamless user experience and modern UI design."
* **رابط الكود:** [https://github.com/anas-roshdi/e-plantShopping](https://github.com/anas-roshdi/e-plantShopping)
* **رابط الديمو:** [https://anas-roshdi.github.io/e-plantShopping/](https://anas-roshdi.github.io/e-plantShopping/)
* **الصور (3 لقطات شاشة):**
  * `/projects/e-plant/Start.png`
  * `/projects/e-plant/Home.png`
  * `/projects/e-plant/Cart.png`

#### مشروع 6: Arabic Character Recognition - [لا يظهر بالواجهة بسبب slice]
* **العنوان:** `Arabic Character Recognition`
* **الدور (Role):** `AI Developer`
* **التقنيات (Tools):** `Python`, `TensorFlow`, `Keras`, `Computer Vision`
* **الوصف:**
  > "Designed a Machine Learning model to recognize handwritten Arabic characters. I utilized Deep Learning techniques and the VGG16 architecture to achieve high classification accuracy."
* **رابط الكود:** [https://github.com/anas-roshdi/Arabic-character-recognition](https://github.com/anas-roshdi/Arabic-character-recognition)
* **رابط الديمو:** فارغ `''`
* **الصور:** لا توجد صور `[]`.

#### مشروع 7: Express Book Reviews API - [لا يظهر بالواجهة بسبب slice]
* **العنوان:** `Express Book Reviews API`
* **الدور (Role):** `Backend Developer`
* **التقنيات (Tools):** `Node.js`, `Express`, `JWT`, `Postman`, `JavaScript`
* **الوصف:**
  > "Built a robust RESTful API for book reviews. I implemented JWT for secure authentication and session-based access control. The project focused on CRUD operations and optimizing backend performance using Node.js and Express."
* **رابط الكود:** [https://github.com/anas-roshdi/expressBookReviews](https://github.com/anas-roshdi/expressBookReviews)
* **رابط الديمو:** فارغ `''`
* **الصور:** لا توجد صور `[]`.

---

### 8) قسم المدونة (Blog) - [معطل في الصفحة الرئيسية، ومتاح كصفحة منفصلة]
* **عنوان القسم في الكود:** `Blogs`
* **طريقة العمل:** جلب تلقائي لمقالات المطور من منصة `dev.to` لحساب `anas-roshdi` عبر الرابط `https://dev.to/api/articles?username=anas-roshdi`.
* **الحالة الفعلية:**
  * في الصفحة الرئيسية: تم تعطيل المكون تعليقاً `{/*<Blog blogs={blogs} />*/}`، ولكن طلب الجلب البرمجي `await getData()` لا يزال يعمل في الخلفية!
  * في صفحة `/blog`: يفتح صفحة بعنوان `All Blog` مع شبكة فارغة لأن الحساب لا يحتوي على مقالات منشورة حالياً في dev.to.

---

### 9) قسم تواصل معي (Contact Section)
* **عنوان القسم الجانبي:** `CONTACT`
* **عنوان النموذج:** `CONTACT ME`
* **نص الرسالة الترحيبية بالنموذج:**
  > "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
* **حقول النموذج:**
  * `Your Name: ` (إدخال نصي إلزامي بحد أقصى 100 حرف)
  * `Your Email: ` (إدخال بريد إلكتروني مع فحص الصيغة)
  * `Your Message: ` (مربع نصي إلزامي بحد أقصى 500 حرف)
  * زر الإرسال: `Send Message` (يتحول إلى `Sending Message...` أثناء الإرسال).
* **بيانات الاتصال المباشرة المجاورة للنموذج:**
  * البريد الإلكتروني: `[a7nas.tailka@gmail.com]` (مأخوذ من `personalData.email`)
  * رقم الهاتف: `+966546563094`
  * الموقع / العنوان: `Makkah `
  * أيقونات التواصل النشطة:
    * GitHub: `https://github.com/anas-roshdi`
    * LinkedIn: `https://www.linkedin.com/in/anas-tilika-925a6b212/`

---

### 10) قسم التذييل (Footer)
* **النص الحرفي:**
  > `© Developer Portfolio by ` [Anas Tilika](https://www.linkedin.com/in/anas-tilika-925a6b212/)
* **أزرار التفاعل:**
  * زر النجمة: `STAR` (رابط: `https://github.com/anas-roshdi/developer-portfolio`)
  * زر التفرع: `FORK` (رابط: `https://github.com/anas-roshdi/developer-portfolio/fork`)

---

## 4. قائمة الأصول (Assets) والأحجام

### أ) أصول الواجهة العامة (`public/`)
| المسار والملف | النوع / الاستخدام | الحجم بالبايت | الحجم التقديري |
| :--- | :--- | :--- | :--- |
| `public/resume.pdf` | ملف السيرة الذاتية PDF | 117,628 B | 114.87 KB |
| `public/profile.png` | الصورة الشخصية والأيقونة | 81,070 B | 79.17 KB |
| `public/uqu-logo.png` | شعار جامعة أم القرى | 23,615 B | 23.06 KB |
| `public/card.png` | خلفية بطاقة | 96,416 B | 94.16 KB |
| `public/top-bg.svg` | خلفية علوية SVG | 567,378 B | 554.08 KB |
| `public/section.svg` | فاصل أقسام SVG | 9,917 B | 9.68 KB |
| `public/hero.svg` | خلفية قسم البطل SVG | 9,851 B | 9.62 KB |
| `public/grid.svg` | شبكة خلفية SVG | 3,554 B | 3.47 KB |
| `public/blur-23.svg` | توهج خلفية SVG | 615 B | 0.60 KB |
| `public/next.svg` | شعار Next.js | 1,375 B | 1.34 KB |
| `public/vercel.svg` | شعار Vercel | 629 B | 0.61 KB |

### ب) صور مشاريع أنس النشطة (`public/projects/`)
* **مشروع ديفو (Devo) - 9 صور (إجمالي ~585 KB):**
  * `devo-cover.png`: 104,173 B (101.73 KB)
  * `Report.png`: 83,351 B (81.40 KB)
  * `ProductManagment.png`: 80,354 B (78.47 KB)
  * `TopProducts.png`: 57,513 B (56.17 KB)
  * `Homepage.png`: 52,797 B (51.56 KB)
  * `CustomerManagment.png`: 49,245 B (48.09 KB)
  * `Report2.png`: 43,731 B (42.71 KB)
  * `SalesInvoice.png`: 42,658 B (41.66 KB)
  * `PurchaseInvoice.png`: 42,124 B (41.14 KB)
* **مشروع لمة (Lammeh) - 8 صور (إجمالي ~1.65 MB):**
  * `Results.jpeg`: 268,807 B (262.51 KB)
  * `Hinting.jpeg`: 236,117 B (230.58 KB)
  * `Role1.jpeg`: 217,611 B (212.51 KB)
  * `Role2.jpeg`: 209,730 B (204.81 KB)
  * `selectCategory.jpeg`: 208,470 B (203.58 KB)
  * `home.jpeg`: 184,694 B (180.37 KB)
  * `addPlayers.jpeg`: 175,108 B (171.00 KB)
  * `Guess.jpeg`: 172,728 B (168.68 KB)
* **مشروع نظام التحضير الذكي (NFC Attendance) - 6 صور (إجمالي ~109 KB):**
  * `nfc-scan-3.jpg`: 20,613 B (20.13 KB)
  * `add-course.jpg`: 20,594 B (20.11 KB)
  * `nfc-scan-1.jpg`: 19,442 B (18.99 KB)
  * `nfc-scan-2.jpg`: 18,130 B (17.71 KB)
  * `edit-student.jpg`: 16,434 B (16.05 KB)
  * `login.jpg`: 14,485 B (14.15 KB)
* **مشروع متجر النباتات (E-Plant) - 3 صور كبيرة (إجمالي ~7.37 MB):**
  * `Start.png`: 3,372,137 B (3.29 MB)
  * `Home.png`: 2,492,813 B (2.43 MB)
  * `Cart.png`: 1,508,444 B (1.47 MB)
* **مشروع رحلة القرآن (Quran Journey) - 34 صورة (إجمالي ~9.2 MB):**
  * تتراوح أحجام الصور بين 128 KB و 345 KB (متوسط حجم كل صورة 280 KB).

### ج) أصول ورسوم متحركة في كود التطبيق (`app/assets/`)
* **ملفات Lottie المتحركة (`app/assets/lottie/`):**
  * `lotti.json`: 689,002 B (672.85 KB)
  * `study.json`: 475,586 B (464.44 KB)
  * `education.json`: 385,037 B (376.01 KB)
  * `development.json`: 315,018 B (307.63 KB)
  * `coding.json`: 142,503 B (139.16 KB)
  * `js.json`: 139,943 B (136.66 KB)
  * `build.json`: 98,868 B (96.55 KB)
  * `code.json`: 84,167 B (82.19 KB) *(الملف الوحيد المرتبط بمكون، في قسم الخبرة المعطل)*
  * `contact.json`: 60,728 B (59.30 KB)
* **أيقونات المهارات (`app/assets/svg/skills/`):**
  * تضم 74 ملف أيقونة SVG لجميع المهارات الشائعة (أكبرها `linux.svg` بحجم 189 KB، وباقي الملفات بين 1 إلى 5 KB).
* **أيقونات ومشاريع القالب المهملة (`app/assets/svg/projects/` و `svg/experience/`):**
  * `four.svg`: 3,755,002 B (3.66 MB - حجم ضخم جداً لملف SVG مهمل).
  * 11 ملف SVG لمشاريع وتجارب قديمة يتجاوز مجموع أحجامها 3.5 MB.

### د) أصول القالب القديم المهملة في `public/image/` و `public/png/`
| الملف | الاستخدام الأصلي | الحجم بالبايت | الحجم التقديري |
| :--- | :--- | :--- | :--- |
| `public/image/portfolio.gif` | صورة GIF متحركة للقالب الأصلي | 4,125,560 B | 4.03 MB |
| `public/image/travel.jpg` | مشروع سياحي للمؤلف الأصلي | 2,732,404 B | 2.66 MB |
| `public/image/ayla.jpg` | مشروع قديم للمؤلف الأصلي | 1,712,188 B | 1.67 MB |
| `public/image/screen.png` | لقطة شاشة القالب الأصلي | 361,321 B | 352.85 KB |
| `public/image/crefin.jpg` | مشروع قديم للمؤلف الأصلي | 337,227 B | 329.32 KB |
| `public/png/placeholder.png` | صورة بديلة مؤقتة | 325,620 B | 317.99 KB |
| `public/image/real-estate.jpg` | مشروع عقارات للمؤلف الأصلي | 241,512 B | 235.85 KB |
> **ملاحظة:** ملفات القالب القديم المهملة وحدها تشغل أكثر من **9.6 ميجابايت** داخل مجلد `public` دون أن يتم استدعاؤها في أي صفحة حالية!

---

## 5. التصميم والواجهة

### 1) الألوان (Color Palette)
* **الخلفية العامة (`body`):** `#0d1224` (أزرق ليلي غامق جداً).
* **خلفيات البطاقات والحاويات:** تدرجات بين `#0d1224` و `#0a0d37` مع حقول مدخلات بلون `#10172d`.
* **لون الإبراز الأساسي (Primary Accent):** `#16f2b3` (تركواز مشع - نيون فيروزي)، مستخدم في الروابط، الأسماء، التحديدات، وعناوين الأقسام.
* **لون الإبراز الثانوي (Secondary Accent):** `#ec4899` (`pink-500` وردي فاقع).
* **تدرجات الأزرار والفواصل المشعة:**
  * `from-pink-500 to-violet-600` (تدرج لوني مشع متكرر في الأزرار والحدود).
  * فواصل الأقسام: تدرج من الشفاف عبر `violet-500` إلى الشفاف.
* **ألوان الحدود (Borders):** درجات داكنة تشمل `#1b2c68a0`, `#353a52`, `#25213b`, `#1a1443`.
* **ألوان النصوص:** الأبيض `#ffffff` ودرجة الرمادي الثلجي `#d3d8e8` ورمادي الخفوت `text-gray-400`.

### 2) الخطوط (Typography)
* **الخط الرئيسي:** خط **Inter** من مكتبة Google Fonts (`next/font/google`) بمجموعة المحارف اللاتينية (`latin`).
* **خط الأكواد:** `font-mono` الافتراضي للنظام المستدعى عبر Tailwind CSS في بطاقات المشاريع والبطل.

### 3) الوضع الفاتح والداكن (Theme Modes)
* **الموقع مصمم حصرياً كوضع داكن (Dark Theme Only).**
* لا يوجد أي زر أو خيار لتبديل الوضع (No Light/Dark Toggle).
* يوجد استعلام وسائط شكلي في `app/css/globals.scss` لـ `@media (prefers-color-scheme: dark)` يحدد متغير لون النص فقط، بينما لون الخلفية مسمر على `#0d1224`.

### 4) دعم الجوال والتجاوب (Mobile Responsiveness)
* الأقسام الداخلية وشبكات العرض مهيأة بفئات Tailwind للتجاوب مع مختلف الشاشات (`sm:`, `md:`, `lg:`).
* **مشكلة جوهرية في الجوال:** شريط التنقل (`navbar.jsx`) يخفي الروابط على الشاشات الصغيرة (`md:hidden`) عبر الفئات `h-screen max-h-0 opacity-0`، **ولا يوجد زر همبرغر (Hamburger Button)** لفتح القائمة على الهواتف، مما يجعل التنقل عبر الأقسام العلوية مستحيلاً على الجوال.

### 5) اللغة ودعم RTL
* **اللغة الرسمية للموقع:** الإنجليزية (`<html lang="en">`).
* **اتجاه الصفحة:** من اليسار إلى اليمين (LTR).
* **لا يوجد دعم للاتجاه المعاكس (RTL)** على مستوى التنسيق أو المتصفح، بالرغم من وجود تعليقات عربية ومحتوى باللغتين لبعض المشاريع في الكود.

---

## 6. نماذج الاتصال والتحليلات وبيئة العمل

### 1) كيف يعمل نموذج التواصل؟
* **في الواجهة الأمامية (`contact-form.jsx`):**
  * تم تعديل النموذج ليرسل البيانات مباشرة عبر طلب `axios.post` إلى خدمة **Formspree** السحابية:
    `https://formspree.io/f/mzddbdqk`
  * بمجرد نجاح الإرسال (كود 200) يتم إظهار إشعار Toast بنجاح الإرسال وتفريغ الحقول.
* **في الكود الخلفي (`app/api/contact/route.js`):**
  * يوجد مسار خلفي أصلي موروث من القالب يقوم بإرسال بريد عبر `nodemailer` (باستخدام Gmail SMTP) وإشعار فوري إلى بوت تيليجرام. **هذا المسار مهمل حالياً ولا تتصل به الواجهة إطلاقاً.**

### 2) أسماء متغيرات البيئة المطلوبة (Environment Variables)
*(تُعرض أسماء المتغيرات فقط دون أي قيم سرية)*:
* `NEXT_PUBLIC_GTM`: معرف Google Tag Manager للتحليلات.
* `NEXT_PUBLIC_APP_URL`: الرابط الأساسي للنطاق العام للتطبيق.
* `NEXT_PUBLIC_RECAPTCHA_SECRET_KEY`: المفتاح السري لكابتشا غوغل في المسار `api/google`.
* `EMAIL_ADDRESS`: بريد Gmail المرسل والمستقبل (المستخدم في مسار `api/contact`).
* `GMAIL_PASSKEY`: كلمة مرور التطبيق (App Password) لحساب Gmail في `nodemailer`.
* `TELEGRAM_BOT_TOKEN`: رمز التحقق الخاص ببوت تيليجرام.
* `TELEGRAM_CHAT_ID`: معرف المحادثة المستقبلة على تيليجرام.

### 3) التحليلات (Analytics)
* يوجد تكامل مع **Google Tag Manager (GTM)** في `app/layout.js`:
  ```jsx
  <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
  ```
* إذا لم يتم توفير قيمة `NEXT_PUBLIC_GTM` في ملف `.env` فلن يتم تحميل أو تشغيل التتبع.

---

## 7. تحسين محركات البحث (SEO والبيانات الوصفية)

من واقع ملف `app/layout.js`:
* **عنوان الصفحة (`Title`):**
  > `Portfolio of Anas Tilika - Software Developer`
* **وصف الصفحة (`Description`):**
  > `This is the portfolio of Anas Tilika. I am a full stack developer and a self-taught designer. I love to learn new things and I am always open to collaborating with others.`  
  *(ملاحظة: هذا الوصف متبقٍ جزئياً من نص القالب الأصلي الذي كان يصف المطور كـ "self-taught designer")*.
* **أيقونة الموقع (`Favicon / Icon`):**
  * مضبوطة على الصورة الشخصية: `/profile.png`
* **صورة المشاركة (Open Graph / Twitter Image):**
  * **غير موجودة إطلاقاً؛** لا يوجد تعريف لكائن `openGraph` أو `twitter` في `metadata`، وبالتالي عند مشاركة الرابط على منصات التواصل (واتساب، لينكدإن، تويتر) لن تظهر صورة معاينة مخصصة.

---

## 8. بيانات النشر والاستضافة

* **مستودع GitHub:**
  * الرابط: [https://github.com/anas-roshdi/developer-portfolio](https://github.com/anas-roshdi/developer-portfolio)
  * نوع الرؤية: **عام (Public Repository)** - تم التحقق من إمكانية الوصول إلى المراجع الخارجية دون تسجيل دخول.
  * الفرع الأساسي: `main`.
* **مشروع Vercel:**
  * لا توجد أي إعدادات خاصة بـ Vercel محلياً (لا يوجد ملف `vercel.json` ولا مجلد `.vercel`).
  * المشروع قياسي ومتوافق مع النشر المباشر على Vercel أو Netlify بمجرد ربط المستودع.
* **الدومين المخصص:**
  * لا يوجد دومين مخصص مسجل بالكود؛ المتغير `NEXT_PUBLIC_APP_URL` في ملف `.env.example` متروك فارغاً.

---

## 9. المشاكل، النواقص، وبقايا القالب المرصودة

### أ) بقايا ونصوص وروابط القالب الأصلي
1. **وصف المشروع في `package.json`:** السطر 3 ما زال يحمل: `"description": "Portfolio of Abu Said"`.
2. **ملف التوثيق `README.md`:** بالكامل تابع للقالب الأصلي ويحتوي على لقطات شاشة، وروابط دعم، ورابط استعراض حي يعود لـ `https://abusaid.netlify.app/`.
3. **ملف الرعاة `.github/FUNDING.yml`:** يحتوي على حسابات التبرع للمطور الأصلي (`said7388` و `abusaid`).
4. **رابط في `utils/data/skills.js`:** السطر 18 يحتوي على تعليق ورابط لمستودع أقدم (`hhhrrrttt222111/developer-portfolio`).
5. **مكون مهمل `app/components/homepage/projects/single-project.jsx`:** كود ميت (Dead Code) غير مستدعى إطلاقاً في أي مكان في المشروع ومتروك من بنية القالب القديمة.
6. **مسار تجريبي `app/api/data/route.js`:** يعيد نصاً تجريبياً عشوائياً `hle!` ورسالة نجاح وهمية.
7. **ملفات وسائط ضخمة وغير مستخدمة:**
   * صور قديمة في `public/image/`: (`ayla.jpg`, `crefin.jpg`, `portfolio.gif`, `real-estate.jpg`, `screen.png`, `travel.jpg`) تستهلك نحو **9.6 ميجابايت**.
   * ملفات SVG قديمة في `app/assets/svg/projects/` (مثل `four.svg` بحجم 3.75 ميجابايت).
   * ملفات رسوم Lottie عديدة في `app/assets/lottie/` غير مستخدمة وتستهلك نحو **2 ميجابايت**.

### ب) أخطاء وهفوات في بيانات المطور
1. **الاسم في `utils/data/personal-data.js`:**
   * القيمة مكتوبة بكسرة عربية خفية تسبق الحرف اللاتيني الأول: `name: "ِAnas Tilika"` (رمز اليونيكود `\u0650`).
2. **البريد الإلكتروني:**
   * في `personal-data.js` السطر 7 كُتب بأقواس مربعة وخطأ إملائي محتمل: `"[a7nas.tailka@gmail.com]"`، مما يجعله يظهر في الواجهة بأقواسه `[...]`، بينما في `contactsData.js` مكتوب بالشكل الصحيح `'a7nas.talika@gmail.com'`.
3. **العنوان:**
   * السطر 8 في `personal-data.js` يحتوي على مسافة فارغة زائدة في النهاية: `'Makkah '`.
4. **حقول التواصل الفارغة:**
   * `facebook`, `twitter`, `stackOverflow`, `leetcode` متروكة سلاسل فارغة `""`.
5. **قسم الخبرات (`experience.js`):**
   * المصفوفة فارغة تماماً `[]`، وبسبب ذلك تم تعطيل القسم يدوياً في الصفحة الرئيسية.
6. **تكرار صورة في مشروع Quran Journey:**
   * تم تكرار الصورة `'/projects/quran-journey/ProfileScreen4.jpeg'` مرتين في مصفوفة الصور داخل `projects-data.js` (السطر 48 والسطر 65).
7. **استيراد غير مستخدم في `projects-data.js`:**
   * السطر 1 يستورد صورة `devoCover` ولكنها غير مستخدمة داخل الملف.

### ج) أخطاء ومشاكل تقنية في الكود والأداء
1. **مشاريع محجوبة عن الظهور:**
   * في `app/components/homepage/projects/index.jsx` السطر 20: الكود يستخدم `projectsData.slice(0, 5)`، مما يحجب المشروع السادس (`Arabic Character Recognition`) والمشروع السابع (`Express Book Reviews API`) عن العرض في الموقع نهائياً.
2. **استدعاء خارجي غير ضروري يبطئ الصفحة الرئيسية:**
   * في `app/page.js` السطر 26: يتم تنفيذ `const blogs = await getData();` في كل تحميل للصفحة لجلب مقالات dev.to من حساب أنس، رغم أن قسم المدونة معطل بالكامل `{/*<Blog blogs={blogs} />*/}`! هذا يضيف زمناً غير مبرر للتحميل، وإذا حدث أي بطء أو خطأ في خوادم dev.to فإنه يرمي خطأ `throw new Error('Failed to fetch data')` يعطل الصفحة الرئيسية بالكامل.
3. **نقص في تعريف أنماط البطاقات بـ CSS:**
   * في `app/css/globals.scss`: تم تعريف متغير `--index` فقط للمشاريع من 1 إلى 4 (`#sticky-card-1` حتى `#sticky-card-4`)، والبطاقة رقم 5 لا تملك قيمة لـ `--index` مما يؤثر على دقة مسافة التثبيت التراكمي (Sticky Stacking).
4. **غياب زر القائمة على الجوال (Mobile Menu Navigation):**
   * شريط التنقل العلوي يخفي الروابط بالكامل على الشاشات الأصغر من `md` دون توفير زر تبديل (Hamburger Button) لإظهارها.
5. **تضارب في مدقق الأكواد (Linting):**
   * عند تشغيل `npm run lint` يظهر خطأ `Invalid project directory provided, no such directory: ...\lint` بسبب اختلاف تعامل Next.js 16 مع ESLint 9، كما أن ملف الإعداد هو القديم `.eslintrc.json` بدلاً من الصيغة المسطحة الجديدة `eslint.config.js`.

---

## 10. تشغيل المشروع محلياً

لتشغيل المشروع محلياً في بيئة التطوير، استخدم الأمر التالي في سطر الأوامر من جذر المشروع:

```bash
npm run dev
```

*أو إذا كنت تستخدم pnpm:*
```bash
pnpm dev
```

بمجرد تشغيل الأمر، يمكنك فتح المتصفح على العنوان التالي:
**[http://localhost:3000](http://localhost:3000)**
