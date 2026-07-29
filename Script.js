/* =========================
   MOBILE MENU
========================= */

function toggleMobileMenu() {

    const menu =
        document.getElementById(
            "mobileMenu"
        );

    menu.classList.toggle(
        "active"
    );

}


/* =========================
   CLOSE MOBILE MENU
========================= */

document
    .querySelectorAll(
        ".mobile-menu a"
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    document
                        .getElementById(
                            "mobileMenu"
                        )
                        .classList
                        .remove(
                            "active"
                        );

                }
            );

        }
    );


/* =========================
   SCROLL TO SECTION
========================= */

function scrollToSection(
    sectionId
) {

    const section =
        document.getElementById(
            sectionId
        );

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   OPEN MODAL
========================= */

function openModal(
    modalId
) {

    const modal =
        document.getElementById(
            modalId
        );

    if (!modal) return;

    modal.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";

}


/* =========================
   CLOSE MODAL
========================= */

function closeModal(
    modalId
) {

    const modal =
        document.getElementById(
            modalId
        );

    if (!modal) return;

    modal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


/* =========================
   CLOSE WHEN CLICKING
   OUTSIDE MODAL
========================= */

document
    .querySelectorAll(
        ".modal"
    )
    .forEach(
        modal => {

            modal.addEventListener(
                "click",
                event => {

                    if (
                        event.target ===
                        modal
                    ) {

                        modal.classList.remove(
                            "active"
                        );

                        document.body.style.overflow =
                            "";

                    }

                }
            );

        }
    );


/* =========================
   ESC KEY CLOSE
========================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            document
                .querySelectorAll(
                    ".modal.active"
                )
                .forEach(
                    modal => {

                        modal.classList.remove(
                            "active"
                        );

                    }
                );

            document.body.style.overflow =
                "";

        }

    }
);


/* =========================
   FORM HANDLER
========================= */

function submitForm(
    event,
    message
) {

    event.preventDefault();

    alert(message);

    event.target.reset();

    const modal =
        event.target.closest(
            ".modal"
        );

    if (modal) {

        modal.classList.remove(
            "active"
        );

    }

    document.body.style.overflow =
        "";

}