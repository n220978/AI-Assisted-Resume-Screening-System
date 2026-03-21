import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../utils/api';
import useAuthStore from '../context/authStore';
import { Navigation } from '../components/Navigation';
import {
    Badge,
    ScoreRing,
    ScoreBar,
    Alert,
    AgentCard,
    AgentPipelineVisualizer,
    SkillBadge,
    SectionHeader,
    StatWidget,
    EmptyState,
    InfoBox,
    Timeline,
    Button,
    Card,
    Skeleton
} from '../components/Common';
import {
    FileText,
    Lightbulb,
    GraduationCap,
    Mic2,
    Shield,
    Scale,
    Target,
    Sparkles,
    CheckCircle,
    AlertCircle,
    Clock,
    Award,
    ArrowRight,
    BookOpen,
    Zap,
    Users,
    Briefcase,
    Search,
    Star,
    BrainCircuit,
    MessageSquare,
    Rocket,
    TrendingUp as TrendingUpIcon,
    X,
    Play,
    Send,
    StopCircle,
    Eye,
    MapPin,
} from 'lucide-react';

// AI Coach Chat Component
const AICoachChat = ({ coaching, application }) => {
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
    const chatEndRef = useRef(null);
    const [chatHistory, setChatHistory] = useState([
        { type: 'ai', content: coaching?.short_message || 'Hi! I am your AI Career Coach. How can I help you improve your candidacy today?' }
    ]);

    // Auto-scroll to bottom on new messages
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatHistory]);

    const suggestions = [
        'How can I improve my resume?',
        'What skills should I learn?',
        'Am I a good fit for this role?',
        'Interview tips please'
    ];

    const handleSend = async (textToSend = message) => {
        if (!textToSend.trim() || sending) return;

        const newHistory = [...chatHistory, { type: 'user', content: textToSend }];
        setChatHistory(newHistory);
        setMessage('');
        setSending(true);

        try {
            const res = await apiClient.post(`/applications/chat/${application._id}`, {
                message: textToSend,
                history: chatHistory.slice(-6)
            });
            setChatHistory(prev => [...prev, { type: 'ai', content: res.data.reply }]);
        } catch (err) {
            setChatHistory(prev => [...prev, { type: 'ai', content: "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again later." }]);
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="space-y-4">
            <div className="bg-slate-50 rounded-xl p-4 h-64 overflow-y-auto space-y-3">
                {chatHistory.map((msg, i) => (
                    <div key={i} className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.type === 'ai' ? 'bg-violet-100 text-violet-600' : 'bg-blue-100 text-blue-600'
                            }`}>
                            {msg.type === 'ai' ? <GraduationCap size={16} /> : <Users size={16} />}
                        </div>
                        <div className={`max-w-[80%] p-3 rounded-xl text-sm ${msg.type === 'ai'
                            ? 'bg-white border border-slate-200 text-slate-700'
                            : 'bg-blue-600 text-white'
                            }`}>
                            {msg.content}
                        </div>
                    </div>
                ))}
                {sending && (
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-violet-100 text-violet-600">
                            <GraduationCap size={16} />
                        </div>
                        <div className="p-3 rounded-xl text-sm bg-white border border-slate-200">
                            <span className="flex items-center gap-1.5"><span className="typing-dot" /><span className="typing-dot" /><span className="typing-dot" /></span>
                        </div>
                    </div>
                )}
                <div ref={chatEndRef} />
            </div>

            <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, i) => (
                    <button
                        key={i}
                        disabled={sending}
                        onClick={() => handleSend(suggestion)}
                        className="px-3 py-1.5 text-xs bg-violet-50 text-violet-700 rounded-full border border-violet-200 hover:bg-violet-100 transition-colors disabled:opacity-50"
                    >
                        {suggestion}
                    </button>
                ))}
            </div>

            <div className="flex gap-2">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder={sending ? "Coach is typing..." : "Ask your AI Coach..."}
                    disabled={sending}
                    className="flex-1 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-violet-500 disabled:bg-slate-50"
                />
                <Button size="sm" onClick={() => handleSend()} disabled={sending} icon={sending ? null : Sparkles}>
                    {sending ? "..." : "Ask"}
                </Button>
            </div>

            {coaching?.resume_improvements?.length > 0 && (
                <InfoBox type="info" title="Resume Improvements">
                    <ul className="space-y-2 mt-2">
                        {coaching.resume_improvements.map((tip, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                                <ArrowRight size={14} className="text-violet-500 mt-1 flex-shrink-0" />
                                <span className="text-slate-600">{tip}</span>
                            </li>
                        ))}
                    </ul>
                </InfoBox>
            )}

            {coaching?.skill_upgrade_plan?.length > 0 && (
                <div className="space-y-3">
                    <p className="font-semibold text-sm text-slate-800 flex items-center gap-2">
                        <BookOpen size={16} className="text-violet-600" />
                        Skill Upgrade Plan
                    </p>
                    {coaching.skill_upgrade_plan.slice(0, 3).map((skill, i) => (
                        <div key={i} className="bg-white border border-slate-200 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Target size={14} className="text-violet-500" />
                                <span className="font-semibold text-sm text-slate-800">{skill.skill}</span>
                            </div>
                            {skill.why_it_matters && (
                                <p className="text-xs text-slate-500 mb-2">{skill.why_it_matters}</p>
                            )}
                            {skill.first_steps && (
                                <div className="flex items-center gap-2 text-xs text-violet-600 bg-violet-50 px-2 py-1.5 rounded-lg">
                                    <Rocket size={12} />
                                    {skill.first_steps}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// Resume Analyzer Component
const ResumeAnalyzer = ({ application }) => {
    const analysisPoints = [
        { label: 'Skills Match', score: application.skill_match || 0, icon: Target },
        { label: 'Experience', score: application.experience_match || 0, icon: Briefcase },
        { label: 'Education', score: application.education_match || 0, icon: BookOpen },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-6">
                <ScoreRing score={application.match_score || 0} size={100} label="Overall Match" />
                <div className="flex-1 space-y-3">
                    {analysisPoints.map((point, i) => (
                        <ScoreBar key={i} score={point.score} label={point.label} />
                    ))}
                </div>
            </div>

            {application.matching_skills?.length > 0 && (
                <div>
                    <p className="font-semibold text-sm text-slate-800 mb-3 flex items-center gap-2">
                        <CheckCircle size={16} className="text-emerald-600" />
                        Matching Skills ({application.matching_skills.length})
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {application.matching_skills.map((skill, i) => (
                            <SkillBadge key={i} skill={skill} matched />
                        ))}
                    </div>
                </div>
            )}

            {application.missing_skills?.length > 0 && (
                <div>
                    <p className="font-semibold text-sm text-slate-800 mb-3 flex items-center gap-2">
                        <AlertCircle size={16} className="text-amber-600" />
                        Skills to Develop ({application.missing_skills.length})
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {application.missing_skills.slice(0, 6).map((skill, i) => (
                            <SkillBadge key={i} skill={skill} missing />
                        ))}
                    </div>
                </div>
            )}

            {application.extracted_skills?.length > 0 && (
                <div>
                    <p className="font-semibold text-sm text-slate-800 mb-3 flex items-center gap-2">
                        <BrainCircuit size={16} className="text-blue-600" />
                        Skills Detected in Your Resume
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {application.extracted_skills.slice(0, 12).map((skill, i) => (
                            <SkillBadge key={i} skill={skill} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
