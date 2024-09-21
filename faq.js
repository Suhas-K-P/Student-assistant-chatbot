// index.js

function showContent(contentType) {
    let contentDisplay = document.getElementById('content-display');
    
    switch (contentType) {
        case 'fees':
            contentDisplay.innerHTML = `
                <div class="fees-info">
                    <h2>Fees Information</h2>
                    <p>The tuition fees for the academic year 2024-2025 are ₹75,000 for undergraduate programs. For postgraduate programs, the fee is ₹1,20,000. You can pay in two installments or avail a loan facility from our partner banks.</p>
                    <h3>Payment Deadline:</h3>
                    <p>The first installment is due by 15th August, and the second by 15th December.</p>
                </div>
            `;
            break;
        case 'address':
            contentDisplay.innerHTML = `
                <div class="address-info">
                    <h2>University Address</h2>
                    <p>XYZ University, 100, University Avenue, Bangalore, Karnataka, 560001, India</p>
                    <h3>Contact Number:</h3>
                    <p>+91 9876543210</p>
                    <h3>Email:</h3>
                    <p>info@xyzuniversity.edu</p>
                </div>
            `;
            break;
        case 'syllabus':
            contentDisplay.innerHTML = `
                <div class="syllabus-info">
                    <h2>Course Syllabus</h2>
                    <p>Our university offers a dynamic and well-rounded syllabus that is regularly updated based on industry trends and technological advancements. You can download the full syllabus for each course from our <a href="#">official website</a>.</p>
                    <ul>
                        <li><strong>Computer Science:</strong> Algorithms, Data Structures, Web Development, AI</li>
                        <li><strong>Electronics:</strong> Circuit Theory, Digital Systems, VLSI Design</li>
                        <li><strong>Mechanical:</strong> Thermodynamics, Fluid Mechanics, Robotics</li>
                    </ul>
                </div>
            `;
            break;
        case 'rules':
            contentDisplay.innerHTML = `
                <div class="rules-info">
                    <h2>University Rules and Regulations</h2>
                    <p>All students are expected to maintain a minimum of 75% attendance to be eligible for the end-semester exams. Any form of ragging or misconduct is strictly prohibited and may lead to expulsion.</p>
                    <h3>Key Rules:</h3>
                    <ul>
                        <li>Maintain discipline within the campus.</li>
                        <li>No use of mobile phones during lectures.</li>
                        <li>Respect the faculty and peers.</li>
                    </ul>
                </div>
            `;
            break;
        case 'events':
            contentDisplay.innerHTML = `
                <div class="events-info">
                    <h2>Upcoming Events</h2>
                    <p>We have some exciting events lined up for the next semester:</p>
                    <ul>
                        <li><strong>Annual Tech Fest:</strong> 10th September 2024</li>
                        <li><strong>Cultural Fest:</strong> 25th November 2024</li>
                        <li><strong>Sports Meet:</strong> 5th January 2025</li>
                    </ul>
                </div>
            `;
            break;
        case 'scholarship':
            contentDisplay.innerHTML = `
                <div class="scholarship-info">
                    <h2>Scholarship Opportunities</h2>
                    <p>XYZ University offers merit-based scholarships for students excelling academically. Additionally, financial aid is available for economically disadvantaged students.</p>
                    <h3>How to Apply:</h3>
                    <p>Applications are open from 1st July to 31st August. Visit our <a href="#">Scholarship Portal</a> to apply.</p>
                </div>
            `;
            break;
        case 'other':
            contentDisplay.innerHTML = `
                <div class="other-info">
                    <h2>Other Information</h2>
                    <p>For any additional queries or concerns, please visit our official <a href="#">FAQ page</a> or contact our student support services.</p>
                </div>
            `;
            break;
        default:
            contentDisplay.innerHTML = `
                <h2>Welcome!</h2>
                <p>Select an option on the left to see more information.</p>
            `;
    }
}
