
    <script src="https://unpkg.com/lucide@latest"></script>

   <script>
        // Initialize Lucide Icons
        lucide.createIcons();

        // Theme Toggler
        const toggleBtn = document.getElementById('themeToggle');
        const htmlEl = document.documentElement;
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        htmlEl.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);

        toggleBtn.addEventListener('click', () => {
            const current = htmlEl.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            htmlEl.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateIcon(next);
        });

        function updateIcon(theme) {
            // Re-render icon
            const iconName = theme === 'light' ? 'moon' : 'sun';
            toggleBtn.innerHTML = `<i data-lucide="${iconName}"></i>`;
            lucide.createIcons();
        }

        // Header Scroll Effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        });

        // Intersection Observer for Reveal
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // TOAST NOTIFICATION SCRIPT
        // This handles the "Audit Description" feature requested
        function showToast(message) {
            const toast = document.getElementById('toast');
            toast.textContent = "DEV NOTE: " + message;
            toast.classList.add('show');
            
            // Remove after 4 seconds
            setTimeout(() => {
                toast.classList.remove('show');
            }, 4000);
        }
    </script>


