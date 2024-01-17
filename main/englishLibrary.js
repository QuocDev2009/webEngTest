const list = "list";
const question = "question";
const correct = "correct";
const explain = "explain";
export let questionsLibrary = [];
let quantity = -1;
let book = [];
let exam = [];
let makeQuestion = (question, ansList, correctAns, explain, type, info, exam) => {
    quantity++;
    questionsLibrary[quantity] = {
        question: question,
        list: ansList,
        correct: correctAns,
        explain: explain,
        typeQuestion: type,
        info: info,
        exam: exam
    };
};
// ngữ pháp và giải thích chi tiết tiếng anh, cơ bản và nâng cao. Tập 1
let bookObj = {
    name: "ngữ pháp và giải thích chi tiết tiếng anh, cơ bản và nâng cao. Tập 1",
    volume: "volume 1",
    writer: "Đại Lợi - Vân Anh", 
    topic: "tenses of verbs",
    exercise: "exercise 27"
};

makeQuestion(
    "When I last saw him, he _____ in London.",
    ["has lived", "is living", "was living", "has been living"],
    "was living",
    "Câu này chọn C vì A, B, D không phù hợp thì với vế cho trước, về cho trước ở thì QKĐ.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "We _____ Dorothy since last Saturday.",
    ["don't see", "haven't seen", "didn't see", "hadn't seen"],
    "haven't seen",
    "Câu này có “since” nên sử dụng thì hiện tại hoàn thành, chọn B",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "The train _____ half an hour ago.",
    ["has been leaving", "left", "has left", "had left"],
    "left",
    "Ta thấy “ago” là dấu hiệu của quá khứ đơn, chọn B.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "Jack _____ the door",
    ["has just painted", "paint", "will have painted", "painting"],
    "has just painted",
    "Câu này chỉ một hành động vừa mới xảy ra, dùng thì hiện tại hoàn thành, ta chọn A.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "My sister _____ for you since yesterday",
    ["is looking", "was looking", "has been looking", "looked"],
    "has been looking",
    "Ta thấy “since” là dấu hiệu của thì hoàn thành, chọn C.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "I _____ Texas State University now",
    ["am attending", "attend", "was attending", "attended"],
    "am attending",
    "“now” là dấu hiệu của thì hiện tại tiếp diễn, chọn A.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "He has been selling motorbikes _____",
    ["ten years ago", "since ten years", "for ten years", "for ten years ago"],
    "for ten years",
    "For + khoảng thời gian là dấu hiệu của thì hiện tại hoàn thành, chọn D.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "Christopher Columbus _____ America more than 500 years ago.",
    ["discovered", "has discovered", "had discovered", "had been discovering"],
    "discovered",
    "“ago” là dấu hiệu của thì quá khứ đơn, chọn A.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "He fell down when he _____ towards the church.",
    ["run", "runs", "was running", "had run"],
    "was running",
    "Câu này diễn tả một hành động đang xảy ra thì một hành động khác xen vào, dùng thì quá khứ tiếp diễn, chọn C.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "We _____ there when our father died.",
    ["still lived", "lived still", "was still lived", "was still living"],
    "still lived",
    "Ta dùng quá khứ đơn cho cả 2 vế của câu nên chọn phương án A với “still” đứng trước động từ thường.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "They _____ table tennis when their father comes back home.",
    ["will play", "will be playing", "play", "would play"],
    "will be playing",
    "Ta thấy “when father comes back home” là một thời điểm xác định nên ta sử dụng thì tương lai tiếp diễn, chọn B.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "By Christmas, I _____ for Mr. Smith for six years.",
    [
        "will have been working",
        "will work",
        "have been working",
        "will be working",
    ],
    "will have been working",
    "Ta thấy trong câu có tính liên tục của hành động trong tương lai “for six years” nên ta dùng thì tương lai hoàn thành tiếp diễn, chọn A.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "I _____ in the room right now.",
    ["am being", "was being", "have been being", "am"],
    "am",
    "Ta thấy có “right now” là dấu hiệu của hiện tại tiếp diễn, dùng “tobe” như bình thường, chọn D.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "I _____ to New York three times this year.",
    ["have been", "was", "were", "had been"],
    "have been",
    "Ta thấy “three times this year” là dấu hiệu của thì hiện tại hoàn thành, chọn A.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "I'll come and see you before I _____ for the States.",
    ["leave", "will leave", "have left", "shall leave"],
    "leave",
    "Ta thấy từ nối “before” được dùng để nối thì hiện tại và tương lai nên trong Vế 2 ta dùng thì hiện tại đơn, chọn A.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "The little girl asked what _____ to her friend.",
    ["has happened", "happened", "had happened", "would have been happened"],
    "had happened",
    "Ta thấy động từ “asked” được dùng trong câu gián tiếp nên hành động đã xảy ra bị lùi lại 1 thi, ta dùng quá khứ hoàn thành, chọn C.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "John _____ a book when I saw him.",
    ["is reading", "read", "was reading", "reading"],
    "was reading",
    "Ta thấy câu diễn tả một hành động đang xảy ra thì một hành động khác xen vào, ta dùng thì quá khứ tiếp diễn, chọn C.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "He said he _____ return later.",
    ["will", "would", "can", "would be"],
    "would",
    "Câu này ta dùng giả định của tương lai, chọn B.",
    "tenses of verb",
    bookObj, 
    false
);
makeQuestion(
    "He was told that he _____ knocked out in the first round.",
    ["had been", "was", "has been", "was being"],
    "had been",
    "Diễn tả một hành động bị động, đã xảy ra và hoàn thành trước một hành động khác trong quá khứ, sử dụng quá khứ hoàn thành bị động, chọn A.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "I have been waiting for you _____.",
    ["since early morning", "since 9 a.m", "for two hours", "All are correct"],
    "All are correct",
    "Ta có thể dùng since + mốc thời gian hoặc for + khoảng thời gian nên chọn D.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "Almost everyone _____ for home by the time we arrived.",
    ["leave", "left", "leaves", "had left"],
    "had left",
    "Ta thấy có “by the time” + quá khứ đơn nên Vẽ trước dùng quá khứ hoàn thành, chọn D.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "By the age of 25, he _____ two famous novels.",
    ["wrote", "writes", "has written", "had written"],
    "had written",
    "“By the age of 25” cũng diễn tả một hành động đã hoàn thành trước một hành động khác trong quá khứ, dùng quá khứ hoàn thành, chọn D.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "When her husband was in the army Mary _____ to him twice a week.",
    ["was reading", "wrote", "was written", "had written"],
    "wrote",
    "Ta thấy “twice a week” diễn tả một thói quen trong quá khứ (phù hợp nghĩa của Vế 1) nên dùng quá khứ đơn, chọn B.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "I couldn't cut the grass because the lawn mower _____ a few days previously.",
    ["broke down", "has been broken", "had broken down", "breaks down"],
    "had broken down",
    "Ta thấy hành động ở Vẽ 1 là hệ quả của hành động ở Về 2 nên ta dùng thì quá khứ hoàn thành, chọn C.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "I have never played badminton before. This is the first time I _____ to play.",
    ["try", "tried", "have tried", "am trying"],
    "have tried",
    "Ta thấy “the first time” là dấu hiệu của thì hiện tại hoàn thành, chọn C.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "Since _____ I have heard nothing from him.",
    ["he had left", "he left", "he has left", "he was left"],
    "he left",
    "Ta thấy sau “since” dùng quá khứ đơn, chọn B.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "After I _____ lunch I looked for my bag.",
    ["had", "had had", "have", "have had"],
    "had had",
    "Ta thấy hành động 1 xảy ra trước hành động 2 nên ta dùng thì quá khứ hoàn thành, chọn B.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "By the end of next year, George _____ English for two years.",
    ["will have learned", "will learn", "has learned", "would learn"],
    "will have learned",
    "Ta thấy “by the end of next year” là dấu hiệu của thì tương lai hoàn thành, chọn A.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "The moment I got out of the car, _____ round to the back and opened the boot.",
    ["walking", "walked", "walks", "walk"],
    "walked",
    "Ta thấy đây là một chuỗi hành động đã xảy ra trong quá khứ, dùng quá khứ đơn, chọn B.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "Henry _____ into the restaurant when the writer was having dinner.",
    ["was going", "went", "has gone", "did go"],
    "went",
    "Ta thấy một hành động xen vào khi một hành động khác đang diễn ra, dùng quá khứ đơn, chọn B.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "He will take the dog out for a walk as soon as he ___ dinner.",
    ["finish", "finishes", "will finish", "finishing"],
    "finishes",
    "Ta thấy sau “as soon as” của một câu mà Về chính ở tương lai thì ta dùng hiện tại đơn, chọn B.",
    "tenses of verb",
    bookObj,
    false
);
makeQuestion(
    "I will be glad if he ___ with us.",
    ["had gone", "did go", "went", "goes"],
    "goes",
    "Ta thấy đây là câu điều kiện loại 1 nên sau Vé “f” ta dùng hiện tại đơn, chọn D.",
    "tenses of verb",
    bookObj,
    false
);

makeQuestion(
    "Ask her to come and see me when she ___ her work.",
    ["finish", "has finished", "finished", "finishing"],
    "has finished",
    "Đây là dạng thức câu mệnh lệnh được chia ở thì hiện tại nên ta chọn B.",
    "tenses of verb",
    bookObj,
    false
);

makeQuestion(
    "Turn off the gas. Don't you see that the kettle ___?",
    ["boil", "boils", "is boiling", "boiled"],
    "is boiling",
    "Yêu cầu 'turn off the gas' xảy ra khi có một hành động khác đang diễn ra tại thời điểm nói, ta dùng thì hiện tại tiếp diễn, chọn C.",
    "tenses of verb",
    bookObj,
    false
);

makeQuestion(
    "Tom and Mary ___ for Vietnam tomorrow.",
    ["leave", "are leaving", "leaving", "are left"],
    "are leaving",
    "Ta thấy 'tomorrow' là dấu hiệu của tương lai nên ta có thể dùng thì hiện tại tiếp diễn để chỉ một hành động chắc chắn xảy ra trong tương lai, chọn B.",
    "tenses of verb",
    bookObj,
    false
);

makeQuestion(
    "He always ___ for a walk in the evening.",
    ["go", "is going", "goes", "going"],
    "goes",
    "Ta thấy 'always' là dấu hiệu của thì hiện tại đơn nên chọn C.",
    "tenses of verb",
    bookObj,
    false
);

makeQuestion(
    "Her brother ___ in Canada at present.",
    ["working", "works", "is working", "work"],
    "is working",
    "Ta thấy 'at present' là dấu hiệu của thì hiện tại tiếp diễn, chọn C.",
    "tenses of verb",
    bookObj,
    false
);

makeQuestion(
    "I ___ to the same barber since last year.",
    ["am going", "have been going", "go", "had gone"],
    "have been going",
    "Ta thấy 'since' là dấu hiệu của thì hoàn thành, chọn B.",
    "tenses of verb",
    bookObj,
    false
);

makeQuestion(
    "Her father ___ when she was a small girl.",
    ["dies", "died", "has died", "had died"],
    "died",
    "Ta thấy về sau của câu là quá khứ đơn nên ta cũng dùng quá khứ đơn cho về trước, chọn B.",
    "tenses of verb",
    bookObj,
    false
);

makeQuestion(
    "Last week, my professor promised that he ___ today.",
    ["would come", "will come", "comes", "coming"],
    "would come",
    "Ta thấy đây là giả định của tương lai với 'last week' nên chọn phương án A.",
    "tenses of verb",
    bookObj,
    false
);

alert(questionsLibrary.length);