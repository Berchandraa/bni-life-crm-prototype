import { useState } from "react";

const assets = {
  logo: "https://www.figma.com/api/mcp/asset/69934a0e-18a2-4bda-bfb6-e34ed2db84fd",
  hero: "https://www.figma.com/api/mcp/asset/2a04ff18-1abe-4450-8bd7-604152b5e93d",
  grid: "https://www.figma.com/api/mcp/asset/5a54989b-59ba-4a8c-957f-f730058e7450",
  sms: "https://www.figma.com/api/mcp/asset/ada4c112-9d72-4eda-b9d8-e1c27398bc26",
  eyeSlash: "https://www.figma.com/api/mcp/asset/32481cd3-5ba7-4474-b901-d2536a696a15",
};

type SignMode = "signin" | "forgot" | "success";

const DUMMY_EMAIL = "adminbnilife@gmail.com";
const DUMMY_PASSWORD = "bni12345678";

function navigate(to: string) {
  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function LogoMark() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-md border border-[#DCDCDC] bg-gradient-to-br from-white to-[#E9E9E9] shadow-[0_1px_3px_rgba(244,121,32,0.08)]">
      <div className="relative h-8 w-8 overflow-hidden rounded">
        <img src={assets.logo} alt="BNI Life" className="absolute left-[-7px] top-[-5px] h-[66px] w-[129px] max-w-none object-cover" />
      </div>
    </div>
  );
}

function MailIcon() {
  return <img src={assets.sms} alt="" className="h-5 w-5 shrink-0" />;
}

function EyeButton({ visible, onClick }: { visible: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="flex h-6 w-6 shrink-0 items-center justify-center rounded hover:bg-[#FAFAFA]" aria-label={visible ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}>
      {visible ? (
        <svg className="h-4 w-4 text-[#7C7C7C]" viewBox="0 0 20 20" fill="none">
          <path d="M2.5 10s2.7-5 7.5-5 7.5 5 7.5 5-2.7 5-7.5 5-7.5-5-7.5-5Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 12.1a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2Z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ) : (
        <img src={assets.eyeSlash} alt="" className="h-4 w-4" />
      )}
    </button>
  );
}

function HeroPanel() {
  return (
    <aside className="relative hidden h-[calc(100vh-20px)] min-h-[720px] w-[48%] max-w-[685px] overflow-hidden rounded-[20px] bg-black/20 lg:block">
      <img src={assets.hero} alt="BNI Life workspace" className="h-full w-full object-cover" />
      <img src={assets.logo} alt="BNI Life" className="absolute right-6 top-6 h-[82px] w-[160px] object-contain" />
    </aside>
  );
}

function AuthInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  leftIcon,
  right,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  error?: boolean;
  leftIcon?: JSX.Element;
  right?: JSX.Element;
}) {
  return (
    <label className="block w-full">
      <span className="mb-1.5 block text-sm font-medium tracking-[-0.28px] text-[#656565]">{label}</span>
      <span className={`flex h-[42px] items-center gap-2 rounded-lg border bg-white px-3.5 py-2.5 shadow-[0_1px_2px_rgba(10,13,18,0.05)] transition-colors ${error ? "border-[#FCA5A5]" : "border-[#DCDCDC] focus-within:border-[#F47920]"}`}>
        {leftIcon}
        <input value={value} onChange={(event) => onChange(event.target.value)} type={type} placeholder={placeholder} className="min-w-0 flex-1 bg-transparent text-base tracking-[-0.32px] text-[#525252] outline-none placeholder:text-[#7C7C7C]" />
        {right}
      </span>
    </label>
  );
}

export default function SignInFlowPage() {
  const [mode, setMode] = useState<SignMode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [touched, setTouched] = useState(false);
  const [notice, setNotice] = useState("");

  const emailLooksValid = /@/.test(email) && email.includes(".");
  const passwordLooksValid = password.length >= 8;
  const canSubmit = emailLooksValid && passwordLooksValid;
  const credentialsMatch = email.trim().toLowerCase() === DUMMY_EMAIL && password === DUMMY_PASSWORD;
  const showEmailError = touched && email.length > 0 && !emailLooksValid;
  const showPasswordError = touched && password.length > 0 && !passwordLooksValid;

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2200);
  };

  const submitSignIn = () => {
    setTouched(true);
    if (!canSubmit) {
      showNotice("Lengkapi email perusahaan dan password minimal 8 karakter.");
      return;
    }
    if (!credentialsMatch) {
      showNotice("ID Agen atau kata sandi tidak sesuai dengan data dummy.");
      return;
    }

    setMode("success");
    window.setTimeout(() => navigate("/"), 900);
  };

  const submitForgot = () => {
    if (!resetEmail.includes("@")) {
      showNotice("Masukkan email perusahaan yang valid.");
      return;
    }

    showNotice("Tautan reset kata sandi dikirim.");
    setMode("signin");
    setEmail(resetEmail);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white font-['Inter',sans-serif] text-[#3D3D3D]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] items-center justify-between gap-8 px-4 py-2 lg:px-[70px]">
        <section className="relative flex min-h-[620px] flex-1 items-center justify-center overflow-hidden rounded-md px-5 py-10 lg:max-w-[600px]">
          <img src={assets.grid} alt="" className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover opacity-45" />
          <div className="relative flex w-full max-w-[536px] flex-col items-center gap-6">
            <LogoMark />

            {mode === "forgot" ? (
              <div className="flex w-full flex-col items-center gap-10">
                <div className="text-center">
                  <h1 className="text-2xl font-semibold leading-[1.4] text-[#3D3D3D]">Reset kata sandi</h1>
                  <p className="mt-2 text-sm font-medium tracking-[-0.28px] text-[#656565]">Masukkan email perusahaan untuk menerima tautan reset.</p>
                </div>
                <div className="w-full max-w-[360px] space-y-10">
                  <div className="px-2.5">
                    <AuthInput label="Email Perusahaan" value={resetEmail} onChange={setResetEmail} placeholder="agent@bni.co.id" leftIcon={<MailIcon />} />
                  </div>
                  <div className="space-y-3 px-2.5">
                    <button onClick={submitForgot} className="h-12 w-full rounded-md bg-[#F47920] px-4 text-lg font-semibold leading-[1.55] text-[#FAFAFA] shadow-[0_1px_1px_rgba(10,13,18,0.05)] hover:bg-[#D4640F]">
                      Kirim tautan reset
                    </button>
                    <button onClick={() => setMode("signin")} className="h-10 w-full rounded-md text-sm font-semibold tracking-[-0.28px] text-[#F47920] hover:bg-[#FFF3E8]">
                      Kembali ke sign in
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex w-full flex-col items-center gap-10">
                <div className="text-center">
                  <h1 className="text-2xl font-semibold leading-[1.4] text-[#3D3D3D]">Selamat datang kembali</h1>
                  <p className="mt-2 text-sm font-medium tracking-[-0.28px] text-[#656565]">Masuk ke BNI Life Workspace untuk memulai sesi Anda.</p>
                </div>

                <div className="w-full max-w-[360px]">
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex w-full flex-col gap-5 px-2.5">
                      <AuthInput label="ID Agen atau Email Perusahaan" value={email} onChange={setEmail} placeholder="Admin234@bni.com" error={showEmailError} leftIcon={<MailIcon />} />
                      <div className="w-full">
                        <AuthInput label="Kata Sandi" value={password} onChange={setPassword} placeholder="********" type={passwordVisible ? "text" : "password"} error={showPasswordError} right={<EyeButton visible={passwordVisible} onClick={() => setPasswordVisible((value) => !value)} />} />
                        <p className={`mt-1.5 text-sm leading-[1.55] tracking-[-0.28px] ${showPasswordError ? "text-[#EF4444]" : "text-[#7C7C7C]"}`}>Password harus terdiri dari 8 karakter!</p>
                      </div>
                    </div>
                    <button onClick={() => setMode("forgot")} className="rounded-md px-3.5 py-1.5 text-sm font-semibold tracking-[-0.28px] text-[#F47920] hover:bg-[#FFF3E8]">
                      Lupa kata sandi ?
                    </button>
                  </div>

                  {mode === "success" ? (
                    <div className="mt-5 rounded-lg border border-[#BBF7D0] bg-[#F0FDF4] px-3.5 py-2 text-center text-sm font-semibold text-[#16A341]">Login berhasil. Mengarahkan ke workspace...</div>
                  ) : null}

                  <div className="mt-10 px-2.5">
                    <button
                      onClick={submitSignIn}
                      className={`h-12 w-full rounded-md px-4 text-lg font-semibold leading-[1.55] shadow-[0_1px_1.5px_rgba(244,121,32,0.08)] transition-colors ${
                        canSubmit ? "bg-[#F47920] text-[#FAFAFA] hover:bg-[#D4640F]" : "bg-[#FEE6CC] text-[#FAA866]"
                      }`}
                    >
                      Masuk ke Workspace
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <HeroPanel />
      </div>

      {notice ? <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-[#292929] px-4 py-2 text-sm font-semibold text-white shadow-lg">{notice}</div> : null}
    </main>
  );
}
