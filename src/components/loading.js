import React from 'react'
import '../styles/loader.scss'
export default function Loading() {
    return (
        <div class="loaderBox">
            <div class="sharingan">
                <div class="pupil"></div>
                <div class="iris"></div>
                <div class="tomoes">
                    <div class="tomoe-area">
                        <div class="tomoe"></div>
                    </div>
                    <div class="tomoe-area">
                        <div class="tomoe"></div>
                    </div>
                    <div class="tomoe-area">
                        <div class="tomoe"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
