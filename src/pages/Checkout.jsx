const Checkout = () => {
    return (
        <div className="space-y-12">
            <div className="h-56 w-full bg-gradient-to-r from-blue-600 to-black rounded-xl relative p-20">
                <h1 className="text-4xl text-white absolute top-1/2 -translate-y-1/2 font-bold">Checkout</h1>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <svg width="296" height="50" viewBox="0 0 296 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M296 49.3H0L27.8 0H268.3L296 49.3Z" fill="#FF3811" />
                        <path d="M46.598 32V17.4545H48.7926V23.7756H56.044V17.4545H58.2457V32H56.044V25.6577H48.7926V32H46.598ZM65.8665 32.2202C64.8438 32.2202 63.9512 31.9858 63.1889 31.517C62.4266 31.0483 61.8348 30.3925 61.4134 29.5497C60.992 28.7069 60.7812 27.7221 60.7812 26.5952C60.7812 25.4635 60.992 24.474 61.4134 23.6264C61.8348 22.7789 62.4266 22.1207 63.1889 21.652C63.9512 21.1832 64.8438 20.9489 65.8665 20.9489C66.8892 20.9489 67.7817 21.1832 68.544 21.652C69.3063 22.1207 69.8982 22.7789 70.3196 23.6264C70.741 24.474 70.9517 25.4635 70.9517 26.5952C70.9517 27.7221 70.741 28.7069 70.3196 29.5497C69.8982 30.3925 69.3063 31.0483 68.544 31.517C67.7817 31.9858 66.8892 32.2202 65.8665 32.2202ZM65.8736 30.4375C66.5365 30.4375 67.0857 30.2623 67.5213 29.9119C67.9569 29.5616 68.2789 29.0952 68.4872 28.5128C68.7003 27.9304 68.8068 27.2888 68.8068 26.5881C68.8068 25.892 68.7003 25.2528 68.4872 24.6705C68.2789 24.0833 67.9569 23.6122 67.5213 23.2571C67.0857 22.902 66.5365 22.7244 65.8736 22.7244C65.206 22.7244 64.652 22.902 64.2116 23.2571C63.776 23.6122 63.4517 24.0833 63.2386 24.6705C63.0303 25.2528 62.9261 25.892 62.9261 26.5881C62.9261 27.2888 63.0303 27.9304 63.2386 28.5128C63.4517 29.0952 63.776 29.5616 64.2116 29.9119C64.652 30.2623 65.206 30.4375 65.8736 30.4375ZM73.3221 32V21.0909H75.3604V22.8665H75.4954C75.7227 22.2652 76.0943 21.7964 76.6104 21.4602C77.1265 21.1193 77.7444 20.9489 78.4641 20.9489C79.1933 20.9489 79.8041 21.1193 80.2965 21.4602C80.7937 21.8011 81.1606 22.2699 81.3974 22.8665H81.511C81.7714 22.2841 82.1857 21.8201 82.7539 21.4744C83.3221 21.1241 83.9992 20.9489 84.7852 20.9489C85.7747 20.9489 86.582 21.259 87.207 21.8793C87.8368 22.4995 88.1516 23.4347 88.1516 24.6847V32H86.0281V24.8835C86.0281 24.1449 85.8268 23.6098 85.4244 23.2784C85.0219 22.947 84.5413 22.7812 83.9826 22.7812C83.2913 22.7812 82.7539 22.9943 82.3704 23.4205C81.9869 23.8419 81.7951 24.384 81.7951 25.0469V32H79.6786V24.7486C79.6786 24.1567 79.494 23.6809 79.1246 23.321C78.7553 22.9612 78.2747 22.7812 77.6829 22.7812C77.2804 22.7812 76.9087 22.8878 76.5678 23.1009C76.2317 23.3092 75.9594 23.6004 75.7511 23.9744C75.5475 24.3485 75.4457 24.7817 75.4457 25.2741V32H73.3221ZM95.6996 32.2202C94.6248 32.2202 93.6991 31.9905 92.9226 31.5312C92.1508 31.0672 91.5542 30.4162 91.1328 29.5781C90.7161 28.7353 90.5078 27.7481 90.5078 26.6165C90.5078 25.4991 90.7161 24.5142 91.1328 23.6619C91.5542 22.8097 92.1413 22.1444 92.8942 21.6662C93.6518 21.188 94.5372 20.9489 95.5504 20.9489C96.166 20.9489 96.7625 21.0507 97.3402 21.2543C97.9179 21.4579 98.4363 21.7775 98.8956 22.2131C99.3549 22.6487 99.7171 23.2145 99.9822 23.9105C100.247 24.6018 100.38 25.4422 100.38 26.4318V27.1847H91.7081V25.5938H98.299C98.299 25.035 98.1854 24.5402 97.9581 24.1094C97.7308 23.6738 97.4112 23.3305 96.9993 23.0795C96.5921 22.8286 96.1139 22.7031 95.5646 22.7031C94.968 22.7031 94.4472 22.8499 94.0021 23.1435C93.5618 23.4323 93.2209 23.8111 92.9794 24.2798C92.7427 24.7438 92.6243 25.2481 92.6243 25.7926V27.0355C92.6243 27.7647 92.7521 28.3849 93.0078 28.8963C93.2682 29.4077 93.6304 29.7983 94.0945 30.0682C94.5585 30.3333 95.1006 30.4659 95.7209 30.4659C96.1233 30.4659 96.4903 30.4091 96.8217 30.2955C97.1532 30.1771 97.4396 30.0019 97.6811 29.7699C97.9226 29.5379 98.1072 29.2514 98.2351 28.9105L100.245 29.2727C100.084 29.8646 99.7952 30.383 99.3786 30.8281C98.9666 31.2685 98.4482 31.6117 97.8232 31.858C97.2029 32.0994 96.495 32.2202 95.6996 32.2202ZM108.276 16.7727L103.588 34.1875H101.692L106.38 16.7727H108.276ZM118.184 21.2756C118.108 20.6032 117.795 20.0824 117.246 19.7131C116.697 19.339 116.006 19.152 115.172 19.152C114.576 19.152 114.06 19.2467 113.624 19.4361C113.188 19.6207 112.85 19.8764 112.608 20.2031C112.372 20.5251 112.253 20.892 112.253 21.304C112.253 21.6496 112.334 21.9479 112.495 22.1989C112.66 22.4498 112.876 22.6605 113.141 22.831C113.411 22.9967 113.7 23.1364 114.007 23.25C114.315 23.3589 114.611 23.4489 114.895 23.5199L116.316 23.8892C116.78 24.0028 117.256 24.1567 117.743 24.3509C118.231 24.545 118.683 24.8007 119.1 25.1179C119.516 25.4351 119.853 25.8281 120.108 26.2969C120.369 26.7656 120.499 27.3267 120.499 27.9801C120.499 28.804 120.286 29.5355 119.86 30.1747C119.438 30.8139 118.825 31.3182 118.02 31.6875C117.22 32.0568 116.252 32.2415 115.115 32.2415C114.026 32.2415 113.084 32.0687 112.289 31.723C111.493 31.3774 110.871 30.8873 110.421 30.2528C109.971 29.6136 109.722 28.8561 109.675 27.9801H111.877C111.919 28.5057 112.09 28.9437 112.388 29.294C112.691 29.6397 113.077 29.8977 113.546 30.0682C114.019 30.2339 114.538 30.3168 115.101 30.3168C115.721 30.3168 116.273 30.2197 116.756 30.0256C117.244 29.8267 117.627 29.5521 117.907 29.2017C118.186 28.8466 118.326 28.4323 118.326 27.9588C118.326 27.5279 118.203 27.1752 117.956 26.9006C117.715 26.6259 117.386 26.3987 116.969 26.2188C116.557 26.0388 116.091 25.8802 115.57 25.7429L113.851 25.2741C112.686 24.9569 111.763 24.4905 111.081 23.875C110.404 23.2595 110.066 22.4451 110.066 21.4318C110.066 20.5937 110.293 19.8622 110.748 19.2372C111.202 18.6122 111.818 18.1269 112.594 17.7812C113.371 17.4309 114.247 17.2557 115.222 17.2557C116.207 17.2557 117.076 17.4285 117.828 17.7741C118.586 18.1198 119.183 18.5956 119.618 19.2017C120.054 19.803 120.281 20.4943 120.3 21.2756H118.184ZM127.653 32.2202C126.578 32.2202 125.652 31.9905 124.876 31.5312C124.104 31.0672 123.507 30.4162 123.086 29.5781C122.669 28.7353 122.461 27.7481 122.461 26.6165C122.461 25.4991 122.669 24.5142 123.086 23.6619C123.507 22.8097 124.094 22.1444 124.847 21.6662C125.605 21.188 126.49 20.9489 127.504 20.9489C128.119 20.9489 128.716 21.0507 129.293 21.2543C129.871 21.4579 130.389 21.7775 130.849 22.2131C131.308 22.6487 131.67 23.2145 131.935 23.9105C132.201 24.6018 132.333 25.4422 132.333 26.4318V27.1847H123.661V25.5938H130.252C130.252 25.035 130.138 24.5402 129.911 24.1094C129.684 23.6738 129.364 23.3305 128.952 23.0795C128.545 22.8286 128.067 22.7031 127.518 22.7031C126.921 22.7031 126.4 22.8499 125.955 23.1435C125.515 23.4323 125.174 23.8111 124.933 24.2798C124.696 24.7438 124.577 25.2481 124.577 25.7926V27.0355C124.577 27.7647 124.705 28.3849 124.961 28.8963C125.221 29.4077 125.584 29.7983 126.048 30.0682C126.512 30.3333 127.054 30.4659 127.674 30.4659C128.076 30.4659 128.443 30.4091 128.775 30.2955C129.106 30.1771 129.393 30.0019 129.634 29.7699C129.876 29.5379 130.06 29.2514 130.188 28.9105L132.198 29.2727C132.037 29.8646 131.748 30.383 131.332 30.8281C130.92 31.2685 130.401 31.6117 129.776 31.858C129.156 32.0994 128.448 32.2202 127.653 32.2202ZM134.689 32V21.0909H136.742V22.8239H136.855C137.054 22.2367 137.405 21.7751 137.907 21.4389C138.413 21.098 138.986 20.9276 139.625 20.9276C139.758 20.9276 139.914 20.9323 140.094 20.9418C140.279 20.9512 140.423 20.9631 140.527 20.9773V23.0085C140.442 22.9848 140.291 22.9588 140.073 22.9304C139.855 22.8973 139.637 22.8807 139.419 22.8807C138.917 22.8807 138.47 22.9872 138.077 23.2003C137.689 23.4086 137.381 23.6998 137.154 24.0739C136.926 24.4432 136.813 24.8646 136.813 25.3381V32H134.689ZM152.029 21.0909L148.074 32H145.801L141.838 21.0909H144.118L146.88 29.4858H146.994L149.75 21.0909H152.029ZM154.025 32V21.0909H156.149V32H154.025ZM155.098 19.4077C154.728 19.4077 154.411 19.2846 154.146 19.0384C153.886 18.7874 153.755 18.4891 153.755 18.1435C153.755 17.7931 153.886 17.4948 154.146 17.2486C154.411 16.9976 154.728 16.8722 155.098 16.8722C155.467 16.8722 155.782 16.9976 156.042 17.2486C156.307 17.4948 156.44 17.7931 156.44 18.1435C156.44 18.4891 156.307 18.7874 156.042 19.0384C155.782 19.2846 155.467 19.4077 155.098 19.4077ZM163.601 32.2202C162.545 32.2202 161.636 31.9811 160.874 31.5028C160.116 31.0199 159.534 30.3546 159.126 29.5071C158.719 28.6596 158.516 27.6889 158.516 26.5952C158.516 25.4872 158.724 24.5095 159.141 23.6619C159.557 22.8097 160.144 22.1444 160.902 21.6662C161.66 21.188 162.552 20.9489 163.58 20.9489C164.408 20.9489 165.147 21.1027 165.795 21.4105C166.444 21.7135 166.967 22.1397 167.365 22.6889C167.768 23.2382 168.007 23.8797 168.082 24.6136H166.016C165.902 24.1023 165.642 23.6619 165.234 23.2926C164.832 22.9233 164.292 22.7386 163.615 22.7386C163.023 22.7386 162.505 22.8949 162.06 23.2074C161.619 23.5152 161.276 23.9555 161.03 24.5284C160.784 25.0966 160.661 25.7689 160.661 26.5455C160.661 27.3409 160.781 28.0275 161.023 28.6051C161.264 29.1828 161.605 29.6302 162.045 29.9474C162.491 30.2647 163.014 30.4233 163.615 30.4233C164.018 30.4233 164.382 30.3499 164.709 30.2031C165.04 30.0516 165.317 29.8362 165.54 29.5568C165.767 29.2775 165.926 28.9413 166.016 28.5483H168.082C168.007 29.2538 167.777 29.8835 167.393 30.4375C167.01 30.9915 166.496 31.4271 165.852 31.7443C165.213 32.0616 164.463 32.2202 163.601 32.2202ZM175.055 32.2202C173.98 32.2202 173.055 31.9905 172.278 31.5312C171.506 31.0672 170.91 30.4162 170.488 29.5781C170.072 28.7353 169.863 27.7481 169.863 26.6165C169.863 25.4991 170.072 24.5142 170.488 23.6619C170.91 22.8097 171.497 22.1444 172.25 21.6662C173.007 21.188 173.893 20.9489 174.906 20.9489C175.521 20.9489 176.118 21.0507 176.696 21.2543C177.273 21.4579 177.792 21.7775 178.251 22.2131C178.71 22.6487 179.073 23.2145 179.338 23.9105C179.603 24.6018 179.735 25.4422 179.735 26.4318V27.1847H171.064V25.5938H177.654C177.654 25.035 177.541 24.5402 177.314 24.1094C177.086 23.6738 176.767 23.3305 176.355 23.0795C175.948 22.8286 175.469 22.7031 174.92 22.7031C174.324 22.7031 173.803 22.8499 173.358 23.1435C172.917 23.4323 172.576 23.8111 172.335 24.2798C172.098 24.7438 171.98 25.2481 171.98 25.7926V27.0355C171.98 27.7647 172.108 28.3849 172.363 28.8963C172.624 29.4077 172.986 29.7983 173.45 30.0682C173.914 30.3333 174.456 30.4659 175.076 30.4659C175.479 30.4659 175.846 30.4091 176.177 30.2955C176.509 30.1771 176.795 30.0019 177.037 29.7699C177.278 29.5379 177.463 29.2514 177.591 28.9105L179.6 29.2727C179.44 29.8646 179.151 30.383 178.734 30.8281C178.322 31.2685 177.804 31.6117 177.179 31.858C176.558 32.0994 175.85 32.2202 175.055 32.2202ZM192.264 32H187.555V17.4545H192.413C193.838 17.4545 195.062 17.7457 196.085 18.3281C197.108 18.9058 197.891 19.7367 198.436 20.821C198.985 21.9006 199.26 23.1955 199.26 24.706C199.26 26.2211 198.983 27.5232 198.429 28.6122C197.879 29.7012 197.084 30.5393 196.042 31.1264C195.001 31.7088 193.741 32 192.264 32ZM189.75 30.0824H192.143C193.251 30.0824 194.172 29.8741 194.906 29.4574C195.64 29.036 196.189 28.4276 196.554 27.6321C196.918 26.8319 197.1 25.8565 197.1 24.706C197.1 23.5649 196.918 22.5966 196.554 21.8011C196.194 21.0057 195.656 20.402 194.941 19.9901C194.226 19.5781 193.339 19.3722 192.278 19.3722H189.75V30.0824ZM206.52 32.2202C205.445 32.2202 204.519 31.9905 203.743 31.5312C202.971 31.0672 202.375 30.4162 201.953 29.5781C201.536 28.7353 201.328 27.7481 201.328 26.6165C201.328 25.4991 201.536 24.5142 201.953 23.6619C202.375 22.8097 202.962 22.1444 203.714 21.6662C204.472 21.188 205.357 20.9489 206.371 20.9489C206.986 20.9489 207.583 21.0507 208.161 21.2543C208.738 21.4579 209.257 21.7775 209.716 22.2131C210.175 22.6487 210.537 23.2145 210.803 23.9105C211.068 24.6018 211.2 25.4422 211.2 26.4318V27.1847H202.528V25.5938H209.119C209.119 25.035 209.006 24.5402 208.778 24.1094C208.551 23.6738 208.232 23.3305 207.82 23.0795C207.412 22.8286 206.934 22.7031 206.385 22.7031C205.788 22.7031 205.268 22.8499 204.822 23.1435C204.382 23.4323 204.041 23.8111 203.8 24.2798C203.563 24.7438 203.445 25.2481 203.445 25.7926V27.0355C203.445 27.7647 203.572 28.3849 203.828 28.8963C204.089 29.4077 204.451 29.7983 204.915 30.0682C205.379 30.3333 205.921 30.4659 206.541 30.4659C206.944 30.4659 207.311 30.4091 207.642 30.2955C207.973 30.1771 208.26 30.0019 208.501 29.7699C208.743 29.5379 208.928 29.2514 209.055 28.9105L211.065 29.2727C210.904 29.8646 210.616 30.383 210.199 30.8281C209.787 31.2685 209.268 31.6117 208.643 31.858C208.023 32.0994 207.315 32.2202 206.52 32.2202ZM218.649 21.0909V22.7955H212.69V21.0909H218.649ZM214.288 18.4773H216.412V28.7969C216.412 29.2088 216.473 29.5189 216.596 29.7273C216.719 29.9309 216.878 30.0705 217.072 30.1463C217.271 30.2173 217.486 30.2528 217.718 30.2528C217.889 30.2528 218.038 30.241 218.166 30.2173C218.294 30.1937 218.393 30.1747 218.464 30.1605L218.848 31.9148C218.725 31.9621 218.549 32.0095 218.322 32.0568C218.095 32.1089 217.811 32.1373 217.47 32.142C216.911 32.1515 216.39 32.0521 215.907 31.8438C215.424 31.6354 215.034 31.3134 214.735 30.8778C214.437 30.4422 214.288 29.8954 214.288 29.2372V18.4773ZM224.173 32.2415C223.481 32.2415 222.856 32.1136 222.298 31.858C221.739 31.5975 221.296 31.2211 220.969 30.7287C220.647 30.2363 220.487 29.6326 220.487 28.9176C220.487 28.3021 220.605 27.7955 220.842 27.3977C221.078 27 221.398 26.6851 221.8 26.4531C222.203 26.2211 222.653 26.0459 223.15 25.9276C223.647 25.8092 224.154 25.7192 224.67 25.6577C225.323 25.5819 225.853 25.5204 226.261 25.473C226.668 25.4209 226.964 25.3381 227.148 25.2244C227.333 25.1108 227.425 24.9261 227.425 24.6705V24.6207C227.425 24.0005 227.25 23.5199 226.9 23.179C226.554 22.8381 226.038 22.6676 225.352 22.6676C224.637 22.6676 224.073 22.8262 223.661 23.1435C223.254 23.456 222.972 23.804 222.816 24.1875L220.82 23.733C221.057 23.0701 221.403 22.535 221.857 22.1278C222.317 21.7159 222.844 21.4176 223.441 21.233C224.038 21.0436 224.665 20.9489 225.323 20.9489C225.759 20.9489 226.22 21.0009 226.708 21.1051C227.201 21.2045 227.66 21.3892 228.086 21.6591C228.517 21.929 228.87 22.3149 229.144 22.8168C229.419 23.3139 229.556 23.9602 229.556 24.7557V32H227.482V30.5085H227.397C227.26 30.7831 227.054 31.053 226.779 31.3182C226.504 31.5833 226.152 31.8035 225.721 31.9787C225.29 32.1539 224.774 32.2415 224.173 32.2415ZM224.634 30.5369C225.221 30.5369 225.723 30.4209 226.14 30.1889C226.561 29.9569 226.881 29.6539 227.099 29.2798C227.321 28.901 227.433 28.4962 227.433 28.0653V26.6591C227.357 26.7348 227.21 26.8059 226.992 26.8722C226.779 26.9337 226.535 26.9882 226.261 27.0355C225.986 27.0781 225.719 27.1184 225.458 27.1562C225.198 27.1894 224.98 27.2178 224.805 27.2415C224.393 27.2936 224.016 27.3812 223.675 27.5043C223.339 27.6274 223.069 27.8049 222.866 28.0369C222.667 28.2642 222.567 28.5672 222.567 28.946C222.567 29.4716 222.762 29.8693 223.15 30.1392C223.538 30.4044 224.033 30.5369 224.634 30.5369ZM232.385 32V21.0909H234.508V32H232.385ZM233.457 19.4077C233.088 19.4077 232.77 19.2846 232.505 19.0384C232.245 18.7874 232.115 18.4891 232.115 18.1435C232.115 17.7931 232.245 17.4948 232.505 17.2486C232.77 16.9976 233.088 16.8722 233.457 16.8722C233.826 16.8722 234.141 16.9976 234.402 17.2486C234.667 17.4948 234.799 17.7931 234.799 18.1435C234.799 18.4891 234.667 18.7874 234.402 19.0384C234.141 19.2846 233.826 19.4077 233.457 19.4077ZM239.489 17.4545V32H237.365V17.4545H239.489ZM250.52 23.7543L248.596 24.0952C248.515 23.849 248.387 23.6146 248.212 23.392C248.042 23.1695 247.81 22.9872 247.516 22.8452C247.222 22.7031 246.855 22.6321 246.415 22.6321C245.814 22.6321 245.312 22.767 244.909 23.0369C244.507 23.3021 244.306 23.6454 244.306 24.0668C244.306 24.4313 244.441 24.7249 244.711 24.9474C244.98 25.17 245.416 25.3523 246.017 25.4943L247.75 25.892C248.754 26.1241 249.502 26.4815 249.995 26.9645C250.487 27.4474 250.733 28.0748 250.733 28.8466C250.733 29.5 250.544 30.0824 250.165 30.5938C249.791 31.1004 249.268 31.4981 248.596 31.7869C247.928 32.0758 247.154 32.2202 246.273 32.2202C245.051 32.2202 244.055 31.9598 243.283 31.4389C242.511 30.9134 242.038 30.1676 241.863 29.2017L243.915 28.8892C244.043 29.4242 244.306 29.8291 244.703 30.1037C245.101 30.3736 245.62 30.5085 246.259 30.5085C246.955 30.5085 247.511 30.3641 247.928 30.0753C248.345 29.7817 248.553 29.4242 248.553 29.0028C248.553 28.6619 248.425 28.3755 248.169 28.1435C247.918 27.9115 247.533 27.7363 247.012 27.6179L245.165 27.2131C244.147 26.9811 243.394 26.6117 242.907 26.1051C242.424 25.5985 242.182 24.9569 242.182 24.1804C242.182 23.5365 242.362 22.973 242.722 22.4901C243.082 22.0071 243.579 21.6307 244.213 21.3608C244.848 21.0862 245.575 20.9489 246.394 20.9489C247.573 20.9489 248.501 21.2045 249.178 21.7159C249.855 22.2225 250.302 22.902 250.52 23.7543Z" fill="white" />
                    </svg>
                </div>
            </div>
            <div className="bg-[#F3F3F3] w-full rounded-xl p-12 grid grid-cols-2 gap-6">
                <input type="text" placeholder="First name" className="input input-bordered input-accent w-full" />
                <input type="text" placeholder="Last name" className="input input-bordered input-accent w-full" />
                <input type="text" placeholder="Phone" className="input input-bordered input-accent w-full" />
                <input type="text" placeholder="Email" className="input input-bordered input-accent w-full" />
                <textarea className="w-full col-span-2 rounded-xl p-6" name="textbox" id="textbox" cols="30" rows="10" placeholder="Your Message"></textarea>
                <button className="bg-primary text-white btn w-full col-span-2">Confirm Order</button>
            </div>
        </div>
    );
};

export default Checkout;