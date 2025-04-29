import NewsletterSubscription from "./NewsletterSubscription";

const NewsletterSection = () => {
  return (
    <section id="newsletter" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Subscribe to my newsletter
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Get the latest updates, trends, and insights about AI and
              automation. A short, crisp summary of the top advancements in the
              field, delivered straight to your inbox, so you can always stay at
              the top of your game.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <NewsletterSubscription />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
