function solution(input) {
    switch (input) {
        case 'upvote': this.upvotes++;
            break;
        case 'downvote': this.downvotes++;
            break;
        case 'score': {
            let result = [];
            const totalVotes = this.upvotes + this.downvotes;
            const balance = this.upvotes - this.downvotes;

            if (totalVotes > 50) {
                const maxVotes = Math.max(this.upvotes, this.downvotes);
                const obfuscateValue = Math.ceil(maxVotes * 0.25);
                result.push(this.upvotes + obfuscateValue, this.downvotes + obfuscateValue);
            } else {
                result.push(this.upvotes, this.downvotes);
            }
            result.push(balance);

            let rating = '';
            if (balance > 10 && (this.upvotes * 100 / this.downvotes) > 66) {
                rating = 'hot';
            } else if (balance >= 0 && totalVotes > 100) {
                rating = 'controversial';
            } else if (balance < 0) {
                rating = 'unpopular';
            } 
            if (totalVotes < 10 && rating === '') {
                rating = 'new';
            }
            // else if (totalVotes < 10) {
            //     rating = 'new';
            // }
            result.push(rating);
            
            return result;
        };
            break;
    }
}

var forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};

solution.call(forumPost, 'upvote');
solution.call(forumPost, 'score'); // [1, 0, 1, 'new']
/*
let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
*/