import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Zap, 
  Shield, 
  RefreshCw, 
  FileImage, 
  Folder,
  Hospital,
  ClipboardCheck,
  Timer,
  TrendingUp,
  Users,
  Mail,
  Github,
  FileText,
  Upload,
  Image,
  BarChart3,
  CheckCircle,
  Activity
} from "lucide-react";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 pt-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
              Clinical AI Solution
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI for Safer, Smarter
              <span className="text-blue-600 block">Chest X-Ray Diagnosis</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Automatically detect and classify catheter and line placements using deep learning. 
              RANZCR CLiP empowers radiologists with high-precision AI assistance for faster, more accurate diagnoses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Try the Demo
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                Request Access
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  What is RANZCR CLiP?
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  RANZCR CLiP is a powerful AI system designed to assist radiologists by detecting catheter and line placements in chest X-rays. With high-precision multi-label classification, the model identifies the condition of ETTs, NGTs, CVCs, and Swan-Ganz catheters—empowering faster decisions and improving patient outcomes.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">11</div>
                    <div className="text-sm text-gray-600">Catheter Types</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">93%</div>
                    <div className="text-sm text-gray-600">Average AUC</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                  <Activity className="w-24 h-24 text-blue-600" />
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Chest X-ray analysis with AI-powered catheter detection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Built for Clinical Environments
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade AI technology designed specifically for healthcare professionals
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Deep Learning Powered",
                  description: "InceptionResNetV2 and Xception architectures for maximum accuracy"
                },
                {
                  icon: Image,
                  title: "11 Detection Classes",
                  description: "Comprehensive catheter and line position analysis with anomaly detection"
                },
                {
                  icon: Zap,
                  title: "Fast Inference",
                  description: "High-resolution X-ray processing in under 0.2 seconds"
                },
                {
                  icon: Shield,
                  title: "TPU Optimized",
                  description: "Reliable performance with Google TPU acceleration"
                },
                {
                  icon: RefreshCw,
                  title: "Smart Augmentation",
                  description: "Intelligent data augmentation for better generalization"
                },
                {
                  icon: Folder,
                  title: "Flexible Input",
                  description: "Supports TFRecords and CSV image pipelines"
                }
              ].map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How the AI Works
              </h2>
              <p className="text-xl text-gray-600">
                Simple, reliable workflow integration in 5 steps
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {[
                { icon: Upload, title: "Upload X-ray", desc: "JPG/TFRecord format" },
                { icon: Image, title: "Image Processing", desc: "Clean, resize, normalize" },
                { icon: Brain, title: "AI Analysis", desc: "InceptionResNetV2 processing" },
                { icon: BarChart3, title: "Classification", desc: "Multi-label predictions" },
                { icon: FileText, title: "Export Results", desc: "Visual reports & data" }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-blue-600 mb-2">Step {index + 1}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section id="performance" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Accurate, Real-Time Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trained on a large annotated dataset from clinical environments, our model achieves 
                high multi-label classification scores across all 11 classes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { metric: "Average AUC", value: "0.93", description: "Area Under Curve" },
                { metric: "Accuracy", value: "91%", description: "Overall Classification" },
                { metric: "Inference Time", value: "0.2s", description: "Per Image Analysis" }
              ].map((stat, index) => (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardHeader>
                    <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <CardTitle className="text-xl text-gray-900">{stat.metric}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-xl text-gray-900">Performance by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "ETT - Abnormal", score: 95 },
                    { name: "CVC - Normal", score: 92 },
                    { name: "NGT - Abnormal", score: 89 },
                    { name: "Swan Ganz - Normal", score: 94 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{item.name}</span>
                      <div className="flex items-center gap-3 flex-1 max-w-xs">
                        <Progress value={item.score} className="flex-1" />
                        <span className="text-sm font-semibold text-blue-600">{item.score}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Powered by Trusted Technology
              </h2>
              <p className="text-xl text-gray-600">
                Built on enterprise-grade infrastructure and proven AI frameworks
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "TensorFlow + Keras",
                "InceptionResNetV2",
                "XceptionNet",
                "Google TPUs",
                "Pandas",
                "OpenCV",
                "TFRecords",
                "Matplotlib"
              ].map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="font-medium text-gray-900">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Use Cases in Radiology
              </h2>
              <p className="text-xl text-gray-600">
                Versatile AI assistance across critical healthcare scenarios
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Hospital,
                  title: "ICU Decision Support",
                  description: "Real-time catheter positioning analysis for critical care decisions and patient safety monitoring."
                },
                {
                  icon: ClipboardCheck,
                  title: "Pre-reporting Screening",
                  description: "AI-assisted preliminary screening to prioritize cases and streamline radiologist workflows."
                },
                {
                  icon: Timer,
                  title: "Emergency Triage",
                  description: "Rapid catheter assessment in emergency situations to accelerate treatment decisions."
                }
              ].map((useCase, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <useCase.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Integrate It Into Your Workflow
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Want to integrate our AI pipeline into your hospital or PACS system? 
              Or want to collaborate to expand it? Let's discuss how RANZCR CLiP can 
              enhance your radiology department.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">RANZCR CLiP</h3>
                <p className="text-gray-400">AI-Driven Medical Insight</p>
                <p className="text-sm text-gray-500 mt-4">
                  © 2025 RANZCR CLiP AI – Advancing radiology through artificial intelligence
                </p>
              </div>
              <div className="flex justify-end space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FileText className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <div className="flex space-x-6 mb-4 md:mb-0">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">GitHub Repo</a>
                  <a href="#" className="hover:text-white transition-colors">API Docs</a>
                </div>
                <p>Professional medical AI solution for healthcare institutions</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
