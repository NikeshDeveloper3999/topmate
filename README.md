# Topmate Clone — Creator Monetization Platform

A full-stack creator storefront platform that enables experts, coaches, and mentors to monetize their knowledge through 1:1 video/audio meetings, webinars, cohort-based courses, priority DMs, and digital products. Inspired by [topmate.io](https://topmate.io).

---

## ✨ Features

### Authentication & Onboarding
- Email/password sign-up and sign-in
- OTP-based passwordless login (via Gmail SMTP)
- Google OAuth via Firebase
- JWT authentication with httpOnly cookies
- Multi-step onboarding wizard (5 steps): profile → expertise → services → availability → contact

### Service Management (Creators)
- Full CRUD for 5 service types:z
  - **1:1 Calls** — video/audio sessions with scheduling
  - **Workshops** — group sessions
  - **Cohort-based Courses** — multi-session programs
  - **Products** — digital downloads
  - **Priority DMs** — paid messaging
- File uploads (Multer + Cloudinary)
- Custom pricing, descriptions, and categorization

### Booking & Payments (Razorpay)
- Availability calendar with configurable slot durations (default 30 min)
- Conflict prevention (unique compound index on creator + date + time)
- Booking confirmation and cancellation flow
- **Razorpay payment gateway** — order creation, checkout modal, and signature verification
- Automatic fee calculation: ₹10 platform fee + 10% commission
- Zoom meeting auto-creation on confirmation
- Calendar invite (`.ics`) generation
- Email notifications via Nodemailer

### Admin Panel
- **Overview Dashboard** — platform-wide stats (users, experts, services, bookings, revenue)
- **Withdrawal Management** — review, approve (Razorpay payout), or reject creator withdrawal requests
- **User Management** — view all users with role indicators, search, and delete users
- **Service Management** — browse all services with search, filter by category/status, and delete
- **Booking Management** — full booking ledger with status and payment tracking

### Dashboards
- **Creator Dashboard**: manage services, bookings, calendar, profile design, payouts, and account settings
- **Seeker Dashboard**: goal-based career coaching, booking history, expert discovery

### Discovery & Profiles
- Marketplace with 15+ category browsing
- Search with MongoDB text indexes
- Customizable public profile pages (themes, testimonials, badges, social links)

### Creator Payouts
- Creator earnings tracking with withdrawable balance
- Razorpay payout integration (IMPS) for bank transfers
- Admin approval workflow with bank account verification
- Pending/completed/failed withdrawal status tracking

### Video Calls
- Zoom API integration (Server-to-Server OAuth)
- Auto-generated Zoom meeting links for confirmed bookings

---

## 🛠 Tech Stack

### Frontend
| Library | Purpose |
|---|---|
| **React 19** | UI framework |
| **Vite 8** | Build tool & dev server |
| **TailwindCSS v4** | Utility-first styling |
| **Redux Toolkit** | Client-side state management |
| **TanStack React Query** | Server-state caching & sync |
| **React Router v7** | Client-side routing |
| **Firebase** | Google OAuth authentication |
| **Framer Motion + GSAP** | Animations |
| **Axios** | HTTP client |
| **React Hot Toast** | Toast notifications |
| **Swiper** | Carousel/slider |
| **Lucide React + React Icons** | Icon libraries |

### Backend
| Library | Purpose |
|---|---|
| **Node.js** | Runtime |
| **Express 5** | Web framework |
| **MongoDB + Mongoose 9** | Database & ODM |
| **JWT (jsonwebtoken)** | Token-based auth |
| **bcrypt** | Password hashing |
| **Razorpay** | Payment gateway & payout processing (IMPS) |
| **Nodemailer** | Email (OTP, booking notifications) |
| **Multer** | File upload handling |
| **Cloudinary** | Cloud media storage |
| **Zoom API** | Video conferencing |
| **slugify** | URL-safe slugs |
| **cookie-parser** | Cookie management |
| **CORS** | Cross-origin requests |

---

## 📁 Project Structure

```
topmate-1-1/
├── backend/
│   ├── src/
│   │   ├── controllers/         # Route handlers
│   │   │   ├── admin.controller.js
│   │   │   ├── Booking.controler.js
│   │   │   ├── user.controler.js
│   │   │   ├── userProfileDesign.controller.js
│   │   │   ├── userServices.controller.js
│   │   │   └── Withdraw.controller.js
│   │   ├── models/              # Mongoose schemas
│   │   │   ├── Booking.model.js
│   │   │   ├── user.model.js
│   │   │   ├── userProfile.model.js
│   │   │   ├── userService.model.js
│   │   │   └── withdrawal.model.js
│   │   ├── routes/              # Express route definitions
│   │   │   ├── admin.routes.js
│   │   │   ├── Booking.routes.js
│   │   │   ├── Service.route.js
│   │   │   ├── user.route.js
│   │   │   └── Withdraw.routes.js
│   │   ├── Middleware/
│   │   │   ├── adminAuth.js
│   │   │   └── jsonWebTokenCheck.js
│   │   ├── Services/
│   │   │   └── sendBookingEmails.js
│   │   ├── utility/             # Shared utilities
│   │   │   ├── CloudInary.js    # Cloudinary connection
│   │   │   ├── Zoom.js          # Zoom OAuth + meeting creation
│   │   │   ├── Multer.js        # File upload config
│   │   │   ├── bcrypt.js        # Password hashing
│   │   │   ├── createICS.js     # .ics calendar file
│   │   │   ├── jwToken.js       # JWT sign/verify
│   │   │   ├── mongoDB.js       # MongoDB connection
│   │   │   └── nodeMail.js      # Nodemailer transporter
│   │   └── uploads/             # Temporary upload directory
│   ├── server.js                # Entry point
│   ├── .env                     # Environment variables
│   ├── .env.example             # Env template
│   └── package.json
│
├── frontend/
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── assets/              # Images, SVGs, homepage data
│   │   ├── auth/                # Sign-in / Sign-up pages (5-step flow)
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Booking/         # Booking flow (confirm, success, video call)
│   │   │   ├── CreatorDashboard/
│   │   │   ├── HomePageComponent/
│   │   │   ├── MarketPlaceComponent/
│   │   │   ├── ProfileComponent/
│   │   │   ├── SeekerDashboarPage/
│   │   │   ├── VideoCall/       # Zoom integration
│   │   │   └── ui/              # Generic UI primitives
│   │   ├── hooks/               # 23 custom React Query hooks
│   │   ├── pages/               # Route-level page components (lazy-loaded)
│   │   │   └── AdminDashboard.jsx  # Admin panel with tabs
│   │   ├── redux/               # Redux slices
│   │   ├── services/            # Axios instance & API service functions
│   │   │   ├── adminService/
│   │   │   │   ├── adminApi.js  # Users, services, bookings, stats
│   │   │   │   └── adminWithdrawalsApi.js
│   │   │   ├── booking-services/
│   │   │   │   ├── createBookingOrder.js
│   │   │   │   └── verifyBookingPayment.js
│   │   │   ├── Withdrawl-service/
│   │   │   └── ...
│   │   └── utility/
│   │       ├── axios.js         # Configured Axios instance
│   │       └── fireBase.js      # Firebase config
│   ├── App.jsx                  # Route definitions
│   ├── main.jsx                 # React entry point
│   ├── index.css                # Global Tailwind styles
│   ├── index.html               # HTML shell
│   ├── .env                     # Environment variables
│   ├── .env.example             # Env template
│   ├── vite.config.js           # Vite config (port 5175)
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+ (includes npm)
- **MongoDB** — local instance or [MongoDB Atlas](https://www.mongodb.com/atlas) free tier
- **Google Cloud Account** — for Firebase (Google OAuth)
- **Zoom Account** — for video meeting creation (Server-to-Server OAuth app)
- **Cloudinary Account** — for media uploads
- **Gmail Account** — with [App Password](https://support.google.com/accounts/answer/185833) enabled for sending OTP/notification emails

### 1. Clone & Install

```bash
git clone <repo-url>
cd topmate-1-1

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Environment Variables

**Backend** — copy `backend/.env.example` to `backend/.env` and fill in:

| Variable | Description |
|---|---|
| `PORT` | Server port (default `8001`) |
| `JWT_SECRET` | Secret key for signing JWTs |
| `MONGODB_URI` | MongoDB connection string |
| `NODE_HEADEMAIL` | Gmail address for sending emails |
| `NODE_HEADEMAIL_PASS` | Gmail app password |
| `ZOOM_ACCOUNT_ID` | Zoom Server-to-Server OAuth account ID |
| `ZOOM_CLIENT_ID` | Zoom OAuth client ID |
| `ZOOM_CLIENT_SECRET` | Zoom OAuth client secret |
| `CLOUDINARY_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_SECRET_KEY` | Cloudinary API secret |
| `RAZORPAY_KEY_ID` | Razorpay API key ID |
| `RAZORPAY_SECRET_KEY` | Razorpay API secret key |
| `RAZORPAY_MASTER_ACCOUNT` | Razorpay master account number (for payouts) |

**Frontend** — copy `frontend/.env.example` to `frontend/.env` and fill in:

| Variable | Description |
|---|---|
| `VITE_BACKEND_URL` | Backend API URL (default `http://localhost:8001/api`) |
| `VITE_FIREBASE_API_KEY` | Firebase API key |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase app ID |
| `VITE_RAZORPAY_KEY_ID` | Razorpay API key ID (used by checkout modal) |

### 3. Run Development Server

Open **two terminals**:

```bash
# Terminal 1 — Backend (http://localhost:8001)
cd backend
npm run server    # nodemon with auto-reload

# Terminal 2 — Frontend (http://localhost:5175)
cd frontend
npm run dev       # Vite dev server
```

---

## 📡 API Endpoints

### User Routes — `/api/user`

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/signup` | Register new user | ❌ |
| POST | `/signin` | Login with email/password | ❌ |
| POST | `/signin-with-google` | Google OAuth login | ❌ |
| POST | `/email-check` | Send OTP for passwordless login | ❌ |
| POST | `/otp-verification` | Verify OTP | ❌ |
| GET | `/getCurrUser` | Get current authenticated user | ✅ |
| POST | `/logout` | Logout (clear JWT cookie) | ✅ |
| POST | `/update-profile` | Update user profile | ✅ |
| PATCH | `/update-settings` | Update scheduling settings | ✅ |
| GET | `/delete-account` | Delete user account | ✅ |
| GET | `/marketplace` | Get marketplace data | ❌ |
| GET | `/get-all-users` | List all users | ❌ |

### Service Routes — `/api/service`

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/create` | Create a service | ✅ |
| GET | `/my` | Get current user's services | ✅ |
| GET | `/id/:serviceId` | Get service by ID | ❌ |
| GET | `/search` | Search services | ❌ |
| GET | `/one-to-one/:id` | Get service with creator data | ❌ |
| PUT | `/update/:serviceId` | Update a service | ✅ |
| DELETE | `/:serviceId` | Delete a service | ✅ |
| GET | `/get-all-services` | List all services | ❌ |

### Booking Routes — `/api/booking`

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/create` | Create a booking | ✅ |
| POST | `/create/dm` | Create a Priority DM booking | ✅ |
| GET | `/seeker/:seekerId` | Get seeker's bookings | ✅ |
| GET | `/creator/:creatorId` | Get creator's bookings | ✅ |
| PUT | `/cancel/:bookingId` | Cancel a booking | ✅ |
| PUT | `/confirm/:bookingId` | Confirm a booking | ✅ |
| PUT | `/complete/:bookingId` | Mark booking as completed | ✅ |
| POST | `/razorpay` | Create Razorpay order for booking | ✅ |
| POST | `/verifyRazorpay` | Verify Razorpay payment signature | ✅ |
| GET | `/seller/earnings` | Get seller earnings stats | ✅ |

### Withdrawal Routes — `/api`

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/seller/withdraw` | Request withdrawal (creator) | ✅ |
| GET | `/seller/withdrawals` | Get own withdrawals (creator) | ✅ |
| GET | `/admin/withdrawals` | List all withdrawals (admin) | ✅ |
| PUT | `/admin/withdrawals/:id` | Approve/reject withdrawal (admin) | ✅ |

### Admin Routes — `/api/admin` (all require admin role)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/stats` | Platform-wide statistics |
| GET | `/users` | List all users |
| DELETE | `/users/:userId` | Delete a user |
| GET | `/services` | List all services |
| DELETE | `/services/:serviceId` | Delete a service |
| GET | `/bookings` | List all bookings |

---

## 📦 NPM Scripts

### Backend

| Script | Command | Description |
|---|---|---|
| `server` | `nodemon server.js` | Start with auto-reload |
| `start` | `node server.js` | Start in production |
| `test` | — | Placeholder (no tests yet) |

### Frontend

| Script | Command | Description |
|---|---|---|
| `dev` | `vite --host 0.0.0.0` | Start dev server (port 5175) |
| `build` | `vite build` | Production build |
| `preview` | `vite preview` | Preview production build |
| `lint` | `eslint .` | Lint all source files |

---

## ⚙️ Configuration & Defaults

| Setting | Default |
|---|---|
| Backend port | `8001` |
| Frontend port | `5175` |
| Timezone | `Asia/Kolkata` |
| Slot duration | `30` minutes |
| Notice period | `60` minutes |
| JWT cookie | httpOnly, secure |
| Service categories | `one-to-one`, `priorityDm`, `workshop`, `product`, `package` |
| Booking statuses | `pending`, `confirmed`, `cancelled`, `completed` |
| User roles | `user` (seeker), `expert` (creator), `admin` |
| Withdrawal statuses | `pending`, `processing`, `completed`, `failed` |
| Platform fee | ₹10 + 10% commission on each booking |
| CORS origin | `http://localhost:5175` |

---

## 🗺 Roadmap / Future Improvements

- [x] Add automated test suite (unit + integration)
- [x] Docker Compose for one-command setup
- [x] Payment gateway integration (Razorpay / Stripe)
- [x] Real-time chat for Priority DMs (Socket.io)
- [x] Admin panel for platform management
- [x] Analytics dashboard for creators
- [x] CI/CD pipeline (GitHub Actions)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

---

## 🔍 Architecture Analysis

### Strengths

| Area | Analysis |
|------|----------|
| **State Management** | Dual-layer approach (Redux for UI state + React Query for server state) is well-architected. Redux handles transient form wizard data while React Query manages caching, background refetching, and automatic cache invalidation — eliminating boilerplate for API state. |
| **Security** | httpOnly cookies with SameSite=Strict for JWTs is a robust XSS/CSRF defense. Passwords hashed with bcrypt (10 rounds). No tokens exposed to JavaScript. |
| **Booking Integrity** | Compound unique index on `creator + time` at the database level provides bulletproof double-booking prevention, backed by application-level UI filtering. |
| **Scalable Organization** | Feature-based directory structure on both frontend and backend. Three-layer API pattern (Service → Hook → Component) enforces clean separation. |
| **External Integrations** | Zoom Server-to-Server OAuth with cached tokens avoids repeated auth; Nodemailer with Gmail SMTP handles transactional emails; Cloudinary provides scalable media storage. |
| **Code Splitting** | All routes are lazy-loaded with React.lazy + Suspense, reducing initial bundle size. |

### Weaknesses & Risks

| Area | Risk | Recommendation |
|------|------|---------------|
| **In-Memory OTP** | OTPs stored in a JS Map — lost on server restart or in multi-instance deployments. | Migrate to Redis or DB-backed OTP storage with TTL. |
| **No Automated Tests** | Zero tests across the codebase. Manual testing only. | Add Jest/Mocha unit tests for controllers, React Testing Library for components, and Cypress for E2E flows. |
| **Error Handling** | No centralized error-handling middleware in Express; try-catch scattered across controllers. | Implement a global Express error handler with consistent JSON error responses. |
| **File Upload Efficiency** | Multer writes to disk before Cloudinary upload — unnecessary I/O for update path. | Use direct Cloudinary uploads with presigned URLs or stream uploads. |
| **No Rate Limiting** | Public endpoints (signin, email-check, OTP) are unprotected against brute-force attacks. | Add `express-rate-limit` on auth routes. |
| **Cron Reliability** | node-cron in a single process — if the server restarts, missed reminders during downtime are lost. | Use a persistent job queue (Bull + Redis) for reliable scheduled tasks. |
| **No Input Validation Library** | Validation is manual in each controller. | Use Joi, Zod, or express-validator for consistent schema validation. |
| **Environment Config** | No validation that required env vars are present at startup. | Use `envalid` or similar to validate env on boot. |

### Performance Analysis

| Metric | Current Status | Bottleneck |
|--------|---------------|------------|
| **Bundle Size** | Lazy-loaded routes minimize initial load. | No bundle analysis or code splitting beyond route level. |
| **API Latency** | Booking creation calls Zoom + DB + email sequentially (2-5s total). | Could be queued for async processing. |
| **DB Queries** | Text indexes on services, compound index on bookings. | Marketplace search may slow as data grows — consider adding pagination. |
| **Concurrent Users** | Single Node.js process, single MongoDB instance. | Horizontal scaling requires shared session store (Redis) and load balancer. |

---

## 📄 License

This project is for educational/demonstration purposes.
