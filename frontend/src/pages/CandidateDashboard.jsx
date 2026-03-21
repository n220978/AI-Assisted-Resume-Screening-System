import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../utils/api';
import useAuthStore from '../context/authStore';
import { Navigation } from '../components/Navigation';
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
