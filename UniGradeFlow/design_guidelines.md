# University Exam & Grading System - Design Guidelines

## Design Approach

**Selected Approach:** Design System + Productivity Tool Reference

Drawing from Material Design principles and modern productivity tools (Linear, Notion) to create a clean, data-focused academic platform. This approach prioritizes clarity, efficiency, and role-based workflows over visual flair.

**Key Principles:**
- Information clarity over decoration
- Consistent patterns across all three dashboards
- Strong visual hierarchy for data tables and forms
- Professional, trustworthy aesthetic appropriate for academic institutions

---

## Typography

**Font Family:**
- Primary: Inter (all weights via Google Fonts)
- Monospace: JetBrains Mono (for grade displays, student IDs)

**Type Scale:**
- Page Titles: text-3xl font-bold (Student Dashboard, Upload Marks, etc.)
- Section Headers: text-xl font-semibold
- Card Titles: text-lg font-medium
- Body Text: text-base font-normal
- Labels & Metadata: text-sm font-medium
- Fine Print: text-xs text-gray-600

**Hierarchy Rules:**
- Dashboard page titles always at top with breadcrumb navigation
- Section headers introduce each functional area
- Table headers use font-semibold for scannability

---

## Layout System

**Spacing Primitives:** 
Use Tailwind units: 2, 3, 4, 6, 8, 12, 16 for consistent rhythm
- Component padding: p-4 to p-6
- Section spacing: space-y-6 to space-y-8
- Card gaps: gap-4 to gap-6
- Page margins: px-6 py-8 (mobile), px-8 py-12 (desktop)

**Dashboard Layout Structure:**
```
- Sidebar Navigation (fixed left, w-64, role-based menu items)
- Main Content Area (ml-64, full height with internal scroll)
- Top Bar (user info, logout, notifications - sticky)
```

**Grid Patterns:**
- Subject Cards: 2-column on tablet, 3-column on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Statistics Cards: 3-4 column layout (grid-cols-3 lg:grid-cols-4)
- Forms: Single column max-w-2xl for optimal data entry

---

## Component Library

### Navigation
**Sidebar Navigation:**
- Fixed left sidebar with role-specific menu items
- Active state: subtle background fill with border-l-4 accent
- Menu items: py-3 px-4 with icons from Heroicons (outline style)
- Role badge at top of sidebar (Student/Teacher/Admin)

**Top Bar:**
- Sticky header with user name, profile avatar, notification bell
- Logout button as secondary action
- Height: h-16 with border-b separator

### Cards & Containers
**Subject/Course Cards:**
- Rounded corners (rounded-lg)
- Border treatment (border with subtle shadow)
- Padding: p-6
- Header with course code + name
- Metadata row (semester, credits, teacher name)
- Action buttons at bottom

**Statistics Cards:**
- Compact design (p-4)
- Large number display (text-4xl font-bold) for metrics
- Label below number (text-sm)
- Icon in top-right corner

**Data Tables:**
- Full-width responsive tables
- Alternating row backgrounds for scannability
- Sticky header row on scroll
- Row hover states for interactivity
- Action column (right-aligned) for edit/delete/approve buttons
- Sort indicators in column headers

### Forms & Inputs
**Form Layout:**
- Vertical stacking with space-y-4
- Label above input (text-sm font-medium mb-2)
- Input fields: full-width with rounded-md borders
- Focus states: ring-2 ring-blue-500
- Helper text below inputs (text-xs text-gray-500)

**Mark Entry Forms:**
- Grid layout for batch entry (3-4 columns: Student Name, Internal Marks, Practical Marks, Semester Marks)
- Input validation indicators (green checkmark, red error icon)
- Save draft vs Submit buttons clearly differentiated

**Buttons:**
- Primary: solid fill, rounded-md, px-6 py-2.5, font-medium
- Secondary: border outline style
- Danger: for reject/delete actions
- Icon buttons: square with icon only for compact actions

### Status Indicators
**Mark Status Badges:**
- Pending: yellow/orange badge
- Approved: green badge
- Rejected: red badge
- Published: blue badge
- Use rounded-full px-3 py-1 text-xs font-medium

**Grade Display:**
- Large, bold grade letter/number
- Supporting text for grade point/percentage
- Pass/Fail indicator with appropriate treatment

### Overlays & Modals
**Confirmation Dialogs:**
- Centered modal with backdrop blur
- Clear title (text-xl font-semibold)
- Descriptive message
- Action buttons (Cancel + Confirm) at bottom
- Max-width: max-w-md

**Mark Review Modal (Admin):**
- Larger modal (max-w-3xl) showing student details, submitted marks, teacher info
- Side-by-side comparison if re-submission
- Approve/Reject buttons prominent at bottom

### Data Visualization
**Result Statistics (Admin):**
- Simple bar charts for grade distribution
- Line chart for class average trends
- Donut chart for pass/fail ratios
- Use Chart.js or similar lightweight library
- Keep charts minimal and readable

---

## Dashboard-Specific Patterns

### Student Dashboard
**Layout Sections:**
1. Welcome header with current semester info
2. Quick stats row (Total Subjects, Current GPA, Credits Completed)
3. Subject cards grid showing registered courses
4. Marks table with expandable rows for detailed breakdown
5. Report card download section

**Emphasis:** Read-only, information consumption interface

### Teacher Dashboard
**Layout Sections:**
1. Assigned courses overview
2. Pending submissions alert box (if any)
3. Course selection dropdown/tabs
4. Mark entry table (editable) with bulk upload option
5. Submission history with status tracking

**Emphasis:** Data entry optimization, clear submission states

### Admin Dashboard
**Layout Sections:**
1. System-wide statistics (total students, pending approvals, published results)
2. Pending approvals queue (priority list)
3. User management table (add/edit/deactivate)
4. Session & subject management
5. Result finalization controls

**Emphasis:** Workflow management, approval actions, oversight

---

## Accessibility & Polish

- Maintain WCAG AA contrast ratios throughout
- Focus indicators visible on all interactive elements
- Form inputs have associated labels with proper htmlFor
- Error messages descriptive and immediately visible
- Loading states for all async operations (skeleton screens for tables, spinner for buttons)
- Success/error toast notifications for user actions (top-right corner)

---

## Responsive Behavior

**Mobile (< 768px):**
- Collapse sidebar to hamburger menu
- Stack all grid layouts to single column
- Horizontal scroll for wide tables with sticky first column
- Bottom navigation bar for quick actions

**Tablet (768px - 1024px):**
- Collapsible sidebar (toggle button)
- 2-column grids where applicable
- Maintain table structure with adjusted column widths

**Desktop (> 1024px):**
- Full sidebar navigation
- Multi-column grids
- Spacious table layouts with all columns visible

---

## Images

**Not Required:** This is a data-focused administrative system. No hero images or decorative imagery needed. Use icons (Heroicons) for visual interest in navigation, empty states, and action buttons.

**Profile Avatars:** User avatars in top bar and user management tables (circular, w-10 h-10)

**Empty States:** Simple illustrations or icons with helpful text when no data exists (e.g., "No marks submitted yet")