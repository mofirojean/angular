# Angular AI ChatApp with Gemini API  

This project is a **simple yet an amazing AI-powered chat application** built using **Angular** and the **Gemini API**. It enables seamless interaction with Google's **Gemini AI**, providing a smooth conversational experience within a web-based chat interface.  

## **Getting Started**  

To set up and run this project locally, follow the steps below.  

### **1. Clone the Repository**  

Begin by cloning the repository to your local machine:  

```bash
git clone https://github.com/mofirojean/angular.git
```

### **2. Install Dependencies**  

Navigate into the project directory and install all required dependencies using **npm**:  

```bash
npm install
```

### **3. Configure Your Gemini API Key**  

To integrate the Gemini AI functionality, you need an **API key**.  

#### **Steps to Obtain an API Key:**  
1. Visit the [Gemini API documentation](https://ai.google.dev/gemini-api/docs).  
2. Follow the instructions to generate your **API key**.  
3. Open the `gemini.service.ts` file in your project.  
4. Replace `"GEMINI_API_KEY"` with your actual API key in the constructor:  

```typescript
...

constructor() {
    this.generativeAi = new GoogleGenerativeAI("GEMINI_API_KEY");
}

...
```

### **4. Run the Development Server**  

Start the development server using the Angular CLI:  

```bash
ng serve
```

Once the server is running, open your browser and go to:  

```
http://localhost:4200/
```

The application will automatically reload whenever you modify any of the source files.  

## **Contributing** 


I welcome contributions from the community! To contribute to this project:

1. Fork the repository.

2. Create a new branch for your feature or bug fix.

3. Make your changes and commit them with a clear message.

4. Push your changes to your forked repository.

5. Open a pull request to the main repository.

Before submitting a pull request, please ensure your changes follow the project's coding standards and are well-documented.

Thank you for helping improve this project!
