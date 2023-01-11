export const bn = () => {
	const header = 'আমাদের গল্প';
	const p1 = `মানুষের বন্ধু বই, আর বইয়ের বন্ধু বইকন্ঠ। বইকন্ঠ হলো একটি বহুমাত্রিক বইয়ের সমাধান এবং
    বাংলাদেশের <span class="text-btnColor">প্রথম অডিওবুক ও ইবুক মার্কেটপ্লেস</span>। বইকে
    শুধুমাত্র কাগজের পাতায় বন্দি না রেখে অডিও ও ডিজিটাল স্ক্রিনে তুলে ধরছে বইকন্ঠ। এটি যেমন
    পরিবেশ বান্ধব একই সঙ্গে সাশ্রয়ী যা বইকন্ঠকে একটি কার্বন নিউট্রাল ব্র্যান্ডেও পরিণত করেছে।`;
	// বইকন্ঠ, ‘<span class="text-btnColor">হ্যাকিউলিস লিমিটেড (Hackules Limited)</span>’ এর একটি সাবসিডিয়ারি ব্র্যান্ড।
	const p2 = `২০২১ সালের ২৬ এ আগস্ট বাংলাদেশ সরকার হতে লাইসেন্স প্রাপ্ত হওয়ার পর
    থেকে দীর্ঘ একবছরের প্রচেষ্টায় আমরা গড়ে তুলেছি বাংলাদেশের সর্বাধুনিক প্রযুক্তির বইয়ের
    প্ল্যাটফর্মঃ বইকন্ঠ।`;
	const p3 = `শুধুমাত্র যানজটের জন্য দেশে প্রতিদিন প্রায় ২ কোটি কর্মঘন্টা নষ্ট হয় এবং জিডিপির ৬-১০% ক্ষতি হয়। <span class="text-btnColor">যানজটে</span> নিজের সময় ও মানসিক স্বাস্থ্য সুরক্ষায়
    বইকন্ঠের অডিওবুক একটি কার্যকরি সমাধান। এছাড়াও
    <span class="text-btnColor"> ভ্রমণে, অবসরে বা পরীক্ষার প্রস্তুতিতে</span> অডিওবুকের ভালো চাহিদা
    রয়েছে।`;
	const p4 = `আমাদের মুল লক্ষ্য সর্বাধুনিক ও অভিনব প্রযুক্তির মাধ্যমে বই পঠন ও শ্রবণ কে জনপ্রিয়করণের
    মাধ্যমে মানুষ ও বইয়ের মধ্যকার ক্রমবর্ধমান দূরত্ব হ্রাস করা এবং বইকে আরও বেশি ​​সহজলভ্য করে
    তোলা।`;
	return {
		header,
		p1,
		p2,
		p3,
		p4
	};
};

export const en = () => {
	const headerEn = 'Our Story';
	const p1En = `Boikontho is the solution of multi-dimensional books and it's the‘<span class="text-btnColor"> first audiobook and ebook marketplace</span>’ in Bangladesh. Boikontho presented books on audio and digital screens instead of only on paper pages.It is eco-friendly as well as cost-effective which makes Boikontho a carbon neutral brand as well.`;
	const p2En = `Since receiving the licence from the Bangladesh Government on 26th August 2021, we developed the most advanced technology book platform in Bangladesh which is : Boikontho.`;
	const p3En = `Due to ‘<span class="text-btnColor">traffic congestion</span>’ , About 2 crore working hours and 6-10% of GDP are lost in the country every day. Boikontho's audiobook is an effective solution to save your time and mental health in traffic jams. Audiobooks are also in good demand for ‘<span class="text-btnColor">travel, leisure and exam preparation</span>’ .`;
	const p4En = `Our main aim is to reduce the growing distance between people and books and make books more accessible by popularising reading and listening through the latest and innovative technologies`;
	return {
		headerEn,
		p1En,
		p2En,
		p3En,
		p4En
	};
};
