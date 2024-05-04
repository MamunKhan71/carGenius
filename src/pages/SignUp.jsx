import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="w-full flex gap-12 items-center justify-between">
            <div className="flex-1 flex items-center justify-center">
                <img src="/src/assets/images/login/login.svg" alt="" />
            </div>
            <div className="flex-1 p-24 border border-gray-300 rounded-xl space-y-4">
                <h1 className="text-3xl font-bold text-[#151515] text-center">Sign Up</h1>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Name</span>
                    </div>
                    <input type="text" placeholder="Your Name" className="input input-bordered w-full " />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Email</span>
                    </div>
                    <input type="text" placeholder="Your email" className="input input-bordered w-full " />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Confirm Password</span>
                    </div>
                    <input type="password" placeholder="Your password" className="input input-bordered w-full " />
                </label>
                <button className="w-full bg-primary btn text-white">Login</button>
                <p className="text-center font-medium">Or Sign In with</p>
                <div className="flex gap-4 items-center justify-center">
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="27.5" cy="27.5" r="27.5" fill="#F5F5F8" />
                        <path d="M29.3047 39.1211V28.5346H32.8761L33.407 24.3896H29.3047V21.7495C29.3047 20.5534 29.6379 19.7345 31.3545 19.7345H33.5297V16.039C32.4714 15.9256 31.4076 15.8708 30.3432 15.875C27.1863 15.875 25.0189 17.8021 25.0189 21.34V24.3819H21.4707V28.5269H25.0267V39.1211H29.3047Z" fill="#3B5998" />
                    </svg>

                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="27.5" cy="27.5" r="27.5" fill="#F5F5F8" />
                        <path d="M20.4829 22.697C21.6913 22.697 22.6709 21.7174 22.6709 20.509C22.6709 19.3006 21.6913 18.321 20.4829 18.321C19.2745 18.321 18.2949 19.3006 18.2949 20.509C18.2949 21.7174 19.2745 22.697 20.4829 22.697Z" fill="#0A66C2" />
                        <path d="M24.7367 24.355V36.494H28.5057V30.491C28.5057 28.907 28.8037 27.373 30.7677 27.373C32.7047 27.373 32.7287 29.184 32.7287 30.591V36.495H36.4997V29.838C36.4997 26.568 35.7957 24.055 31.9737 24.055C30.1387 24.055 28.9087 25.062 28.4057 26.015H28.3547V24.355H24.7367ZM18.5947 24.355H22.3697V36.494H18.5947V24.355Z" fill="#0A66C2" />
                    </svg>
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="27.5" cy="27.5001" r="27.5" fill="#F5F5F8" />
                        <g clipPath="url(#clip0_0_1)">
                            <path d="M22.6875 28.0001C22.6875 27.0092 22.9605 26.0809 23.4348 25.2861V21.9147H20.0634C18.7253 23.6526 18 25.7705 18 28.0001C18 30.2297 18.7253 32.3476 20.0634 34.0854H23.4348V30.714C22.9605 29.9192 22.6875 28.991 22.6875 28.0001Z" fill="#FBBD00" />
                            <path d="M28 33.3126L25.6562 35.6564L28 38.0001C30.2296 38.0001 32.3475 37.2748 34.0854 35.9367V32.5689H30.7175C29.9158 33.0449 28.9836 33.3126 28 33.3126Z" fill="#0F9D58" />
                            <path d="M23.4349 30.7139L20.0635 34.0854C20.3284 34.4294 20.6169 34.7589 20.929 35.0711C22.8178 36.9598 25.329 38 28.0001 38V33.3125C26.0616 33.3125 24.3627 32.2688 23.4349 30.7139Z" fill="#31AA52" />
                            <path d="M38 28.0001C38 27.3917 37.9449 26.7822 37.8363 26.1885L37.7483 25.7081H28V30.3956H32.7442C32.2835 31.312 31.5752 32.0597 30.7175 32.5689L34.0853 35.9367C34.4294 35.6718 34.7589 35.3833 35.0711 35.0712C36.9598 33.1824 38 30.6712 38 28.0001Z" fill="#3C79E6" />
                            <path d="M31.7565 24.2435L32.1708 24.6578L35.4854 21.3433L35.0711 20.929C33.1823 19.0403 30.6711 18.0001 28 18.0001L25.6562 20.3438L28 22.6876C29.419 22.6876 30.7531 23.2401 31.7565 24.2435Z" fill="#CF2D48" />
                            <path d="M28.0001 22.6876V18.0001C25.329 18.0001 22.8178 19.0403 20.929 20.929C20.6169 21.2411 20.3284 21.5706 20.0635 21.9147L23.4349 25.2861C24.3627 23.7313 26.0617 22.6876 28.0001 22.6876Z" fill="#EB4132" />
                        </g>
                        <defs>
                            <clipPath id="clip0_0_1">
                                <rect width="20" height="20" fill="white" transform="translate(18 18.0001)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <p className="font-semibold text-center">Have an account? <span><Link to={`/login`}>Sign In</Link></span></p>
            </div>
        </div>
    );
};

export default SignUp;